#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ICONS_JSON = path.join(ROOT, "icons.json");
const ICONS_DIR = path.join(ROOT, "icons");

function snakeToPascal(snake) {
  return snake
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const icons = JSON.parse(fs.readFileSync(ICONS_JSON, "utf8"));
ensureDir(ICONS_DIR);

const entries = Object.entries(icons);
const barrelLines = [
  "// Barrel: named icon URL exports. Default export = icons manifest.",
  "import manifest from \"./icons.json\";",
  "export default manifest;",
  "",
];

for (const [snakeName, relPath] of entries) {
  const pascal = snakeToPascal(snakeName);
  const svgPath = relPath.startsWith("svg/") ? relPath : `svg/${snakeName}.svg`;
  const content = `export { default } from "../${svgPath}";\n`;
  const outPath = path.join(ICONS_DIR, `${pascal}.js`);
  fs.writeFileSync(outPath, content, "utf8");
  barrelLines.push(`export { default as ${pascal} } from "./icons/${pascal}.js";`);
  // TypeScript declaration for deep imports (e.g. cupertino-icons-svg/Airplane)
  const dtsContent = "/** SVG asset URL (string). */\ndeclare const url: string;\nexport default url;\n";
  fs.writeFileSync(path.join(ICONS_DIR, `${pascal}.d.ts`), dtsContent, "utf8");
}

fs.writeFileSync(path.join(ROOT, "index.js"), barrelLines.join("\n") + "\n", "utf8");

// Generate index.d.ts for strong typization
const iconNameLiterals = entries.map(([name]) => JSON.stringify(name));
const iconNameUnion =
  iconNameLiterals.length > 0
    ? iconNameLiterals.join(" |\n  ")
    : "string";
const pascalNames = entries.map(([snake]) => snakeToPascal(snake));
const indexDts = `/** Cupertino Icons (SF Symbols–style) as SVG URLs. */

/** Snake-case icon keys used in the manifest (e.g. \`"airplane"\`, \`"heart_fill"\`). */
export type IconName =
  ${iconNameUnion};

/** Manifest: map of \`IconName\` to relative SVG path. */
export type CupertinoIconsManifest = Record<IconName, string>;

/** Manifest of all icon names to their SVG paths. */
declare const manifest: CupertinoIconsManifest;
export default manifest;

/** Named icon exports: each is the SVG asset URL (string). */
${pascalNames.map((pascal) => `export const ${pascal}: string;`).join("\n")}
`;

fs.writeFileSync(path.join(ROOT, "index.d.ts"), indexDts, "utf8");

console.log(`Generated ${entries.length} icon modules, index.js, and index.d.ts`);
console.log("Icons dir:", ICONS_DIR);
