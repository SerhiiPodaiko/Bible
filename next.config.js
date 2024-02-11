/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  // reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // SVG
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  // Images link correct
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
