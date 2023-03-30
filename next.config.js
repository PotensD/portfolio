const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
    runtime: 'edge',
  },
}

module.exports = withContentlayer(nextConfig)
