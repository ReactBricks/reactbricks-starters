// Flat config: eslint-config-next 16 ships native flat configs

const nextVitals = require('eslint-config-next/core-web-vitals')

module.exports = [
  // Ignore common build artifacts
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.turbo/**'],
  },

  // Next.js recommended + Core Web Vitals rules
  ...nextVitals,
]
