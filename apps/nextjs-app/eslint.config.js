// Flat config for ESLint v9: eslint-config-next 16 ships native flat configs

const nextVitals = require('eslint-config-next/core-web-vitals')

module.exports = [
  // Ignore common build artifacts
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**', '.turbo/**', 'next-env.d.ts',],
  },

  // Next.js recommended + Core Web Vitals rules
  ...nextVitals,
]
