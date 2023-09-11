import { GameProps, category } from "../games"

export const GoodbyeVolcanoHigh: GameProps = {

    id: "goodbye_volcano_high",
    name: "Goodbye Volcano High",
    description: `Fang é um dinossauro típico de 18 anos: sua maior preocupação é o sucesso da banda, e não o que fazer da vida depois de se formar. Mas quando más notícias estragam a formatura, tudo muda.

    Será que vão ter tempo de descobrir quem realmente são? Será que vão conseguir se adaptar a um mundo de mudanças em meio a um romance? Em tempos difíceis, até onde vamos pelos outros?`,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Goodbye_Volcano_High.png/220px-Goodbye_Volcano_High.png",
    price: 100,
    media: [
        {type: 'video', image: '', link: 'https://youtu.be/szhmZmIMbyY'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/goodbye-volcano-high-screenshot-07-en-11aug20?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/goodbye-volcano-high-screenshot-06-en-11aug20?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/goodbye-volcano-high-screenshot-02-en-11aug20?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/goodbye-volcano-high-screenshot-05-en-11aug20?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/goodbye-volcano-high-screenshot-03-en-11aug20?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/goodbye-volcano-high-screenshot-04-en-11aug20?$1600px$'},
    ],
    developer: "KO_OP",
    platforms: ["PS4","PS5","PC"],
    releaseDate: new Date(2023, 8-1, 29),
    category: [
        {id: '0', name: 'Música/Ritmo'},
        {id: '1', name: 'Aventura'},
    ],

}