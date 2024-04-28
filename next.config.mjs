/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }]
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

export default nextConfig
