# @reactbricks/reactbricks-ui-tailwind-config

Shared Tailwind CSS v4 design tokens for the React Bricks UI theme. The exported `shared-styles.css` file loads the Nunito Sans variable font, custom breakpoints, shadows, and base tweaks used by the bricks.

## Installation

```bash
pnpm add -D @reactbricks/reactbricks-ui-tailwind-config
```

## Usage

Import the stylesheet once near the top of your global CSS so Tailwind picks up the theme values:

```css
@import '@reactbricks/reactbricks-ui-tailwind-config';
```

The React Bricks UI packages (`@reactbricks/reactbricks-ui*`) already import this file from their bundled `styles.css`; add it manually only if you are composing your own theme or extending the default tokens.

## Notes

- Built for Tailwind CSS v4 with CSS `@theme` definitions.
- No JavaScript entry point is provided—consume the CSS file directly.
