# @reactbricks/reactbricks-ui

React Bricks UI theme for Next.js App Pages starter. It provides ready-made marketing bricks (hero units, feature grids, pricing, blog, testimonials, forms, headers/footers) styled with Tailwind CSS v4.

## Installation

```bash
pnpm add @reactbricks/reactbricks-ui
```

## Usage

1. Import the theme styles once in your global stylesheet:

   ```css
   @import '@reactbricks/reactbricks-ui/styles.css';
   ```

2. Import the theme in your React Bricks starter:

   ```ts
   import { types } from 'react-bricks/frontend'
   import reactBricksUiTheme from '@reactbricks/reactbricks-ui'

   const bricks: types.Theme[] = [reactBricksUiTheme /* other themes */]
   export default bricks
   ```

3. Individual bricks can be imported directly from the package when composing a custom theme.

## Notes

- Peer deps: React 19, React Bricks 5.
- Styles rely on `@reactbricks/reactbricks-ui-tailwind-config`; importing the provided CSS is enough to get the design tokens.
