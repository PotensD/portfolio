const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
		runtime: 'edge',
		serverActions: true,
	},
}

module.exports = withContentlayer(nextConfig)
