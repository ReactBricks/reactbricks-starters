# @reactbricks/email-ui

Pre-built React Bricks Email Theme for Next.js Pages Router starter. It provides ready-made newsletter/transactional bricks (headers, footers, article cards, feature rows, galleries, CTAs, rich text) built with `@react-email/components` to keep the output email-safe.

## Installation

```bash
pnpm add @reactbricks/email-ui
```

## Usage

1. Import the optional theme styles once in your global stylesheet:

   ```css
   @import '@reactbricks/email-ui/styles.css';
   ```

2. Import the theme in your React Bricks starter:

   ```ts
   import { types } from 'react-bricks/frontend'
   import emailUiTheme from '@reactbricks/email-ui'

   const bricks: types.Theme[] = [emailUiTheme]
   export default bricks
   ```

3. Individual bricks can be imported directly from the package when composing a custom theme.

## Notes

- Peer deps: React 19, React Bricks 5.
- Bricks are built on `@react-email/components`, keeping the generated HTML compatible with common email clients.
