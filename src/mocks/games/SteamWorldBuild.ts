import { GameProps, category } from "../games"

export const SteamWorldBuild: GameProps = {

    id: "steamWorld_build",
    name: "SteamWorld Build",
    description: ``,
    image: "https://store-images.s-microsoft.com/image/apps.53562.13858202694912107.53904b7d-bf97-47b6-a406-1a093f06954b.e3bafdec-5333-41b5-b4c6-81f8718b23c1?q=90&w=177&h=265",
    price: 100,
    media: [
        {type: 'video', image: 'https://img.youtube.com/vi/bgqGdIoa52s/hqdefault.jpg', link: ''},
        {type: 'image', image: ''},
        {type: 'image', image: ''},
        {type: 'image', image: ''},
        {type: 'image', image: ''},
        {type: 'image', image: ''},
        {type: 'image', image: ''},
        {type: 'image', image: ''},
    ],
    developer: "Thunderful Development",
    platforms: ["PS5", "Xbox Series X/S", "PC"],
    releaseDate: new Date(2023, 8-1, 10),
    category: [
        {id: '0', name: 'Simulação'},
        {id: '1', name: 'Estratégia'},
    ],

}