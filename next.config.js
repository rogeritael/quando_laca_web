/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['drive.google.com','images.wallpapersden.com','www.pcgamesn.com' ,'warframe-web-assets.nyc3.cdn.digitaloceanspaces.com','wallpapercg.com', 'images.ctfassets.net','images.ctfassets.net', 'www.adrenaline.com.br','www.gamereactor.pt','www.consolecreatures.com', 'static.bandainamcoent.eu','sm.ign.com','image.api.playstation.com', 'assets.xboxservices.com','metroamericas.com','assetsio.reedpopcdn.com','d1lss44hh2trtw.cloudfront.net','www.ultimaficha.com.br','sm.ign.com', 'staticctf.ubisoft.com','upload.wikimedia.org', 'images.igdb.com', 'youtu.be', 'i.ytimg.com', 'assetsio.reedpopcdn.com', 'cdn.akamai.steamstatic.com', 'gmedia.playstation.com', 'img.youtube.com', 'store-images.s-microsoft.com', 'image.api.playstation.com'],
    },
}

module.exports = nextConfig
