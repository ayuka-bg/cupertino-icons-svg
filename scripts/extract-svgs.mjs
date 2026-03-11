#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import opentype from "opentype.js";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC_DIR = path.join(ROOT, "cupertino_icons-1.0.8");
const INDEX_HTML = path.join(SRC_DIR, "index.html");
const FONT_PATH = path.join(SRC_DIR, "assets", "CupertinoIcons.ttf");
const OUT_DIR = path.join(ROOT, "svg");
const MANIFEST_PATH = path.join(ROOT, "icons.json");

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function parseIconNames(html) {
  const names = [];
  const regex = /<span class="icon-name">([^<]+)<\/span>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const name = match[1].trim();
    if (name) names.push(name);
  }
  return names;
}

function iconNameToLigature(iconName) {
  // The gallery names are typically like `airplane` or `airplane_fill`.
  // The underlying ligatures in the font generally match the raw name
  // without any transformation.
  return iconName;
}

// Round to 2 decimals for clean viewBox (avoids 355.79999...)
function round2(n) {
  return Math.round(n * 100) / 100;
}

function glyphToSvg(font, glyph) {
  const pathObj = glyph.getPath(0, 0, font.unitsPerEm);
  const commands = pathObj.commands;
  if (!commands || commands.length === 0) {
    return null;
  }

  // getPath() already flips Y to SVG convention — use coordinates as-is
  let d = "";
  for (const cmd of commands) {
    const type = cmd.type;
    if (type === "Z") {
      d += "Z";
      continue;
    }
    if (type === "M") {
      d += `M${cmd.x} ${cmd.y} `;
    } else if (type === "L") {
      d += `L${cmd.x} ${cmd.y} `;
    } else if (type === "C") {
      d += `C${cmd.x1} ${cmd.y1} ${cmd.x2} ${cmd.y2} ${cmd.x} ${cmd.y} `;
    } else if (type === "Q") {
      d += `Q${cmd.x1} ${cmd.y1} ${cmd.x} ${cmd.y} `;
    }
  }

  const box = pathObj.getBoundingBox();
  const padding = 2;
  const width = box.x2 - box.x1;
  const height = box.y2 - box.y1;
  const side = Math.max(width, height) + 2 * padding;
  const cx = (box.x1 + box.x2) / 2;
  const cy = (box.y1 + box.y2) / 2;
  const vbX = round2(cx - side / 2);
  const vbY = round2(cy - side / 2);
  const vbSide = round2(side);

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbX} ${vbY} ${vbSide} ${vbSide}" fill="currentColor">`,
    `  <path d="${d.trim()}"/>`,
    `</svg>`,
    "",
  ].join("\n");
}

async function main() {
  console.log("Reading icon names from index.html...");
  const html = fs.readFileSync(INDEX_HTML, "utf8");
  const iconNames = parseIconNames(html);
  console.log(`Found ${iconNames.length} icon names.`);

  console.log("Loading font...");
  const font = await opentype.load(FONT_PATH);

  ensureDirSync(OUT_DIR);

  const manifest = {};
  let exported = 0;

  for (const iconName of iconNames) {
    const ligature = iconNameToLigature(iconName);
    const glyphs = font.stringToGlyphs(ligature);
    const glyph = glyphs[0];
    if (!glyph) {
      console.warn(`No glyph produced for icon '${iconName}' (ligature '${ligature}')`);
      continue;
    }

    const svg = glyphToSvg(font, glyph);
    if (!svg) {
      console.warn(`Empty path for icon '${iconName}' (skipped)`);
      continue;
    }
    const fileName = `${iconName}.svg`;
    const outPath = path.join(OUT_DIR, fileName);
    fs.writeFileSync(outPath, svg, "utf8");
    manifest[iconName] = `svg/${fileName}`;
    exported++;
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf8");

  console.log(`Exported ${exported} SVG icons.`);
  console.log(`Manifest written to ${MANIFEST_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

