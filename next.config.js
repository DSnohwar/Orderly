/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
    env: {
        API_URL: 'http://localhost:3000',
        DB_URI: 'mongodb://127.0.0.1:27017/orderly'
    },
    images : {
        domains : ["res.cloudinary.com"],
    } 
}

module.exports = nextConfig
