/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  }
}

export default nextConfig
