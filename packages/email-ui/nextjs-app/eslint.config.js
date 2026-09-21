// Flat config: eslint-config-next 16 ships native flat configs

import nextVitals from 'eslint-config-next/core-web-vitals'

export default [
  // Ignore common build artifacts
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.turbo/**'],
  },

  // Next.js recommended + Core Web Vitals rules
  ...nextVitals,
]
