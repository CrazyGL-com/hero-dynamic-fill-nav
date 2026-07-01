<sub>*Hero made by [@ybouane](https://x.com/ybouane).*</sub>
<p align="center">
  <img src="https://crazygl.com/heroes/hero-dynamic-fill-nav/banner-full.png" alt="Dynamic Fill Nav" width="640">
</p>

# @crazygl/hero-dynamic-fill-nav

A nav bar where each link reveals a coloured fill on hover — left-to-right wipe behind a flat-coloured label.

## Demo
[Dynamic Fill Nav](https://crazygl.com/hero/dynamic-fill-nav)

## Install

```bash
npm install @crazygl/hero-dynamic-fill-nav
```

## Usage

```tsx
import DynamicFillNav from '@crazygl/hero-dynamic-fill-nav';

export default function Hero() {
  return (
    <DynamicFillNav
      items={`Work | /work\nProcess | /process\nContact | /contact`}
      fillColor="#5b8def"
    />
  );
}
```

## Customise

- **Links** — `items`: one `label | href` pair per line.
- **Style** — `textColor`, `fillColor` (wipe colour), `fillTextColor` (hover text), `fontSize`, `headingFontFamily`, `headingFontWeight`.
- **Backdrop** — `transparentBackground`, `bgColor`.

## Best for

- Portfolio and studio landing pages with a strong typographic menu.
- Single-page sites that use the nav itself as the hero.
- Minimal brand sites wanting a tactile hover interaction.



This hero is part of [CrazyGL](https://crazygl.com), a collection of production-ready WebGL, canvas, 3D, and typography effects. Every CrazyGL hero ships with an agent-ready `SKILL.md` file that helps developers and coding agents adapt the effect into custom landing pages and interactive experiences.
