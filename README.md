## cupertino-icons-svg

**Cupertino Icons (Apple-style SF Symbols) as individual SVG files for the web and JS bundlers.**

This package converts the official Flutter `CupertinoIcons.ttf` font into a set of standalone SVG files, one per icon, with `fill="currentColor"` so they inherit the text color wherever they are used.

### Installation

```bash
npm install cupertino-icons-svg
```

### Usage

**Named imports (barrel)** — one place, good for autocomplete; tree-shaking keeps bundles small:

```js
import { HeartFill, Airplane } from 'cupertino-icons-svg';

// e.g. in React
export function Example() {
  return (
    <>
      <img src={HeartFill} alt="heart" />
      <img src={Airplane} alt="airplane" />
    </>
  );
}
```

**Deep imports** — one icon per import; only the icons you use are loaded:

```js
import HeartFill from 'cupertino-icons-svg/HeartFill';

export function Example() {
  return <img src={HeartFill} alt="heart" />;
}
```

Icon names are **PascalCase** (e.g. `HeartFill`, `ArrowClockwise`). The package default export is the icon manifest (same as `icons.json`):

```js
import iconManifest from 'cupertino-icons-svg';
// iconManifest['heart_fill'] === 'svg/heart_fill.svg'
```

You can also use raw SVG paths or import a specific file:

```html
<img src="node_modules/cupertino-icons-svg/svg/heart_fill.svg" alt="heart" />
```

```js
import heartFill from 'cupertino-icons-svg/svg/heart_fill.svg';
return <img src={heartFill} alt="heart" />;
```

### Icon gallery

A [live gallery](https://ayuka-bg.github.io/cupertino-icons-svg/gallery.html) is published on GitHub Pages. To run it locally:

```bash
npm run gallery
```

Then open **http://localhost:3333/gallery.html** in your browser. The gallery lists all icons with a search filter.

### Development

This repo uses the official [cupertino_icons](https://github.com/flutter/packages/tree/main/third_party/packages/cupertino_icons) source from the Flutter packages repo via a git submodule. **First-time setup:** ensure the submodule is cloned and sparse-checkout is set so only the icon package is checked out:

```bash
git submodule update --init
./scripts/init-cupertino-source.sh
```

Then the build script will:

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

