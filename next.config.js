/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['images.igdb.com', 'youtu.be'],
    },
    
}

module.exports = nextConfig
