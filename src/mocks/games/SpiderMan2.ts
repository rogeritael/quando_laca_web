import { GameProps, category } from "../games"

export const SpiderMan2: GameProps = {

    id: "spider_man_2",
    name: "Spider-Man 2",
    description: `Os Spiders Peter Parker e Miles Morales estão de volta em mais uma aventura eletrizante da famosa franquia Marvel's Spider-Man para PS5.

    Balance, pule e plane com as novas Asas de Teia para percorrer a Nova York da Marvel e alterne rapidamente entre Peter Parker e Miles Morales para jogar histórias diferentes e usar novos poderes épicos enquanto o infame vilão Venom ameaça a vida deles, das pessoas próximas a eles e a cidade.`,
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg",
    price: 100,
    media: [
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-story-duo-4k-legal-13jul23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-miles-enhanced-venom-en-25may23.jpg?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-venom-4k-legal-13jul23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-symbiote-4k-legal-13jul23?$1600px$'},
        {type: 'video', image: 'https://img.youtube.com/vi/qIQ3xNqkVC4/hqdefault.jpg', link: 'https://youtu.be/qIQ3xNqkVC4'},
        {type: 'video', image: 'https://img.youtube.com/vi/bgqGdIoa52s/hqdefault.jpg', link: 'https://youtu.be/bgqGdIoa52s'},
        {type: 'video', image: 'https://img.youtube.com/vi/ZRhJT2nmvA4/hqdefault.jpg', link: 'https://youtu.be/ZRhJT2nmvA4'},
    ],
    developer: "Insomniac",
    platforms: ["PS5"],
    releaseDate: new Date(2023, 10-1, 20),
    category: [
        {id: '0', name: 'Ação'},
        {id: '1', name: 'Aventura'},
    ],

}