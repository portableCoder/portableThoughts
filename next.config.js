const { env } = require('process');

/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: env.NODE_ENV === "development" ? undefined : '/portableThoughts/',
  basePath: env.NODE_ENV === "development" ? undefined : "/portableThoughts",
  distDir: "dist",

  images: {
    domains: ['github.com'],
  },
}

module.exports = withTM(nextConfig)
