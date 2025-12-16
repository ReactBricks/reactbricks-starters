/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile package with TS source
  transpilePackages: [
    '@reactbricks/reactbricks-ui',
    // '@reactbricks/email-ui' <<EMAIL_BRICKS>>
  ],
  i18n: {
    locales: ['en'], // Add your languages here
    defaultLocale: 'en',
    localeDetection: false,
  },
}

export default nextConfig
