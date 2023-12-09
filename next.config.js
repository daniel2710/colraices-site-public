/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vc.colraices.com',
        port: '',
        pathname: '/storage/properties/**',
      },
    ],
  },
}

module.exports = nextConfig