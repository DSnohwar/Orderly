/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },

    images: {
        domains: ["res.cloudinary.com"],
    },
    env: {
        API_URL:'http://localhost:3000',
        DB_URI:'mongodb://127.0.0.1:27017/orderly',
        NEXTAUTH_SECRET:'DONTFORGETAGAIN33445',
    },
}

module.exports = nextConfig
