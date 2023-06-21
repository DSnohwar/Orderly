/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
    env: {
        DB_URI: 'mongodb://127.0.0.1:27017/orderly'
    } 
}

module.exports = nextConfig
