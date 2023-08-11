/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.igdb.com'],
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    }
}

module.exports = nextConfig
