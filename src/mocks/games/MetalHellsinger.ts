import { GameProps, category } from "../games"

export const MetalHellsinger: GameProps = {

    id: "metal_hellsinger",
    name: "Metal: Hellsinger",
    description: `Parte humano, parte demônio e obcecado por vingança, torne-se o "Desconhecido" e lute pelos domínios mais perigosos do inferno nesse jogo de ação, ritmo e tiro repleto de heavy-metal.

    Metal: Hellsinger é uma combinação única de jogo de tiro e ritmo em que sua habilidade de disparar conforme a batida melhora sua experiência no jogo. Quanto mais em sincronia você estiver com o ritmo, mais intensa a música vai ficar e mais destruição você vai causar.
    
    Destrua as hordas de demônio e seus líderes para finalmente enfrentar a Red Judge em pessoa.`,
    image: "https://store-images.s-microsoft.com/image/apps.52817.14211614393053975.a4ffed37-2d8b-4964-b012-03eb22bf47cc.73f7b01a-d730-4271-8afd-2fb9df504dd3?q=90&w=177&h=265",
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
    developer: "Funcom",
    platforms: ["PS5", "Xbox Series X/S", "PC"],
    releaseDate: new Date(2023, 8-1, 10),
    category: [
        {id: '0', name: 'Ação'},
        {id: '1', name: 'Aventura'},
        {id: '2', name: 'Música'},
        {id: '3', name: 'Tiro'},
    ],

}