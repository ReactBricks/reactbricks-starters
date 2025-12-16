/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@reactbricks/reactbricks-ui',
    // '@reactbricks/email-ui' <<EMAIL_BRICKS>>
  ],
  reactStrictMode: false,
}

export default nextConfig
