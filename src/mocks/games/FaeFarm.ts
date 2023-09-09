import { GameProps, category } from "../games"

export const FaeFarm: GameProps = {

    id: "fae_farm",
    name: "Fae Farm",
    description: `Fuja para uma vida cheia de magia em Fae Farm, um RPG de simulador de fazenda para 1 a 4 jogadores. Crie, cultive e decore para expandir sua fazenda compartilhada e use feitiços para explorar a ilha encantada de Azoria!`,
    image: "",
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
    developer: "",
    platforms: ["PS5", "Xbox Series X/S", "PC"],
    releaseDate: new Date(2023, 8-1, 10),
    category: [
        {id: '0', name: ''},
        {id: '1', name: ''},
        {id: '2', name: ''},
        {id: '3', name: ''},
    ],

}