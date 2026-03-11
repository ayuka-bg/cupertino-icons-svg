## cupertino-icons-svg

**Cupertino Icons (Apple-style SF Symbols) as individual SVG files for the web and JS bundlers.**

This package converts the official Flutter `CupertinoIcons.ttf` font into a set of standalone SVG files, one per icon, with `fill="currentColor"` so they inherit the text color wherever they are used.

### Installation

```bash
npm install cupertino-icons-svg
```

### Usage

Use directly as static assets:

```html
<img src="node_modules/cupertino-icons-svg/svg/heart_fill.svg" alt="heart" />
```

With bundlers that support importing SVGs:

```js
import heartFill from 'cupertino-icons-svg/svg/heart_fill.svg';

// e.g. in React
export function Example() {
  return <img src={heartFill} alt="heart" />;
}
```

You can also inspect `icons.json` for a machine-readable manifest of all icon names and their SVG paths.

### Icon gallery

To browse all icons locally, run a static server and open the gallery:

```bash
npm run gallery
```

Then open **http://localhost:3333/gallery.html** in your browser. The gallery lists all icons with a search filter.

### Development

This repo bundles the original Flutter `cupertino_icons` package under `cupertino_icons-1.0.8/` and uses a build script to:

- Parse icon names from `index.html`
- Read glyphs from `assets/CupertinoIcons.ttf`
- Resolve ligatures
- Export clean SVG files into `svg/`
- Generate `icons.json`

To re-run the extraction after changing the script:

```bash
npm install
npm run build
```

