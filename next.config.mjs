/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: { remotePatterns: [{ hostname: 'res.cloudinary.com' }] },
  env: { API_BASE_URL: process.env.API_BASE_URL },
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

export default nextConfig
