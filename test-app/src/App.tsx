import { useState, type CSSProperties } from "react";
import "./App.css";

import { HeartFill, StarFill, Airplane } from "cupertino-icons-svg";
import AirplaneDeep from "cupertino-icons-svg/Airplane";
import airplaneUrl from "cupertino-icons-svg/svg/airplane.svg";
import heartFillUrl from "cupertino-icons-svg/svg/heart_fill.svg";
import starFillUrl from "cupertino-icons-svg/svg/star_fill.svg";
import icons, { type IconName } from "cupertino-icons-svg";

const sampleIcons: [string, string][] = [
  ["airplane", airplaneUrl],
  ["heart_fill", heartFillUrl],
  ["star_fill", starFillUrl],
];

const barrelIcons: [string, string, string][] = [
  ["HeartFill (barrel)", HeartFill, "heart_fill.svg"],
  ["StarFill (barrel)", StarFill, "star_fill.svg"],
  ["Airplane (barrel)", Airplane, "airplane.svg"],
  ["Airplane (deep)", AirplaneDeep, "airplane.svg"],
];

// URL glob for img fallback / references
const iconGlob = import.meta.glob<string>(
  "../node_modules/cupertino-icons-svg/svg/*.svg",
  { query: "?url", import: "default", eager: true },
);
const urlByFilename: Record<string, string> = {};
for (const [pathKey, url] of Object.entries(iconGlob)) {
  const filename = pathKey.split("/").pop();
  if (filename) urlByFilename[filename] = url;
}

// Raw SVG glob so we can inline and use CSS color (currentColor)
const rawGlob = import.meta.glob<string>(
  "../node_modules/cupertino-icons-svg/svg/*.svg",
  { query: "?raw", import: "default", eager: true },
);
const rawByFilename: Record<string, string> = {};
for (const [pathKey, raw] of Object.entries(rawGlob)) {
  const filename = pathKey.split("/").pop();
  if (filename) rawByFilename[filename] = raw;
}

interface ManifestEntry {
  name: IconName;
  url: string;
  raw: string;
}

const manifestEntries: ManifestEntry[] = (
  Object.entries(icons) as [IconName, string][]
)
  .slice(0, 30)
  .map(([name, relPath]) => {
    const filename = relPath.split("/").pop() ?? "";
    const url = urlByFilename[filename];
    const raw = rawByFilename[filename];
    return url && raw ? { name, url, raw } : null;
  })
  .filter((entry): entry is ManifestEntry => entry !== null);

function App() {
  const [iconColor, setIconColor] = useState("#e5e7eb");
  const [iconSize, setIconSize] = useState(42);

  const iconWrapperStyle: CSSProperties = {
    color: iconColor,
    width: iconSize,
    height: iconSize,
  };

  return (
    <div className="page">
      <header className="header">
        <h1>Cupertino Icons SVG · React demo </h1>
        <p className="subtitle">
          Testing <code>cupertino-icons-svg</code> imports in a Vite + React
          app.
        </p>
        <div className="controls">
          <label className="control">
            <span className="control-label">Color</span>
            <input
              type="color"
              value={iconColor}
              onChange={(e) => setIconColor(e.target.value)}
              className="control-color"
            />
            <span className="control-value">{iconColor}</span>
          </label>
          <label className="control">
            <span className="control-label">Size</span>
            <input
              type="range"
              min={16}
              max={96}
              value={iconSize}
              onChange={(e) => setIconSize(Number(e.target.value))}
              className="control-slider"
            />
            <span className="control-value">{iconSize}px</span>
          </label>
        </div>
      </header>

      <section className="section">
        <h2>Named and deep imports</h2>
        <p className="section-text">
          <code>
            import &#123; HeartFill &#125; from &apos;cupertino-icons-svg&apos;
          </code>{" "}
          or{" "}
          <code>
            import Airplane from &apos;cupertino-icons-svg/Airplane&apos;
          </code>
          .
        </p>
        <div className="icon-row">
          {barrelIcons.map(([label, , filename]) => {
            const raw = rawByFilename[filename];
            return raw ? (
              <figure key={label} className="icon-card">
                <div className="icon-circle">
                  <span
                    className="icon-inline"
                    style={iconWrapperStyle}
                    dangerouslySetInnerHTML={{ __html: raw }}
                    title={label}
                  />
                </div>
                <figcaption className="icon-name">{label}</figcaption>
              </figure>
            ) : null;
          })}
        </div>
      </section>

      <section className="section">
        <h2>Direct SVG path imports</h2>
        <p className="section-text">
          These icons are imported as modules from{" "}
          <code>cupertino-icons-svg/svg/*.svg</code>.
        </p>
        <div className="icon-row">
          {sampleIcons.map(([name]) => {
            const raw = rawByFilename[`${name}.svg`];
            return raw ? (
              <figure key={name} className="icon-card">
                <div className="icon-circle">
                  <span
                    className="icon-inline"
                    style={iconWrapperStyle}
                    dangerouslySetInnerHTML={{ __html: raw }}
                    title={name}
                  />
                </div>
                <figcaption className="icon-name">{name}</figcaption>
              </figure>
            ) : null;
          })}
        </div>
      </section>

      <section className="section">
        <h2>Icons from manifest</h2>
        <p className="section-text">
          The first 30 entries from <code>icons.json</code>, imported as{" "}
          <code>import icons from &apos;cupertino-icons-svg&apos;</code>.
        </p>
        <div className="icon-grid">
          {manifestEntries.map(({ name, raw }) => (
            <figure key={name} className="icon-card">
              <div className="icon-square">
                <span
                  className="icon-inline"
                  style={iconWrapperStyle}
                  dangerouslySetInnerHTML={{ __html: raw }}
                  title={name}
                />
              </div>
              <figcaption className="icon-name">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
