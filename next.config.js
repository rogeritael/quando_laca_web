/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['upload.wikimedia.org', 'images.igdb.com', 'youtu.be', 'i.ytimg.com', 'assetsio.reedpopcdn.com', 'cdn.akamai.steamstatic.com', 'gmedia.playstation.com', 'img.youtube.com', 'store-images.s-microsoft.com', 'image.api.playstation.com'],
    },
    
}

module.exports = nextConfig
