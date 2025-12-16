# @reactbricks/reactbricks-ui-astro

React Bricks UI theme for Astro starter. It provides ready-made marketing bricks (hero units, feature grids, pricing, blog, testimonials, forms, headers/footers) styled with Tailwind CSS v4.

## Installation

```bash
pnpm add @reactbricks/reactbricks-ui-astro
```

## Usage

1. Import the theme styles once in your global stylesheet:

   ```css
   @import '@reactbricks/reactbricks-ui-astro/styles.css';
   ```

2. Import the theme in your React Bricks starter:

   ```ts
   import { types } from 'react-bricks/astro'
   import reactBricksUiTheme from '@reactbricks/reactbricks-ui-astro'

   const bricks: types.Theme[] = [reactBricksUiTheme /* other themes */]
   export default bricks
   ```

3. Individual bricks can be imported directly from the package when composing a custom theme.

## Notes

- Peer deps: Astro ^5.6.1, React 19, React Bricks 5.
- Styles rely on `@reactbricks/reactbricks-ui-tailwind-config`; importing the provided CSS is enough to get the design tokens.
