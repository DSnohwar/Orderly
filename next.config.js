/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },

    images: {
        domains: ["res.cloudinary.com"],
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        DB_URI: process.env.DB_URI,
        DB_URI_LOCAL: process.env.DB_URI_LOCAL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        CLOUD_NAME: process.env.CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
        TRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    },
}

module.exports = nextConfig
