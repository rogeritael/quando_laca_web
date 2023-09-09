import { GameProps, category } from "../games"

export const LiesOfP: GameProps = {

    id: "lies_of_p",
    name: "Lies of P",
    description: `Esse jogo soulslike macabro se inspira em uma história inesperada: as aventuras do Pinóquio. 

    Nessa versão sombria do conto clássico de Carlo Collodi, Pinóqui está procurando pelo misterioso Sr. Gepeto. Sua jornada o leva até Krat, uma cidade inspirada na Belle Époque e cujos habitantes estão perdidos em meio à insanidade e marionetes assassinas.
    
    Pinóquio deve lutar para sobreviver usando uma grande variedade de armas e Legion Arms com habilidades especiais. Ele também encontrará personagens não hostis, mas será necessário mentir para que ele realize seu sonho de se tornar humano.`,
    image: "https://store-images.s-microsoft.com/image/apps.8000.14192455363228157.62cdc953-5043-44f6-9d45-bfc336ec30ba.e251c679-88c8-4f62-8f63-09ee399718cb",
    price: 100,
    media: [
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/lies-of-p-Screenshot-02-01-en-21nov22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/lies-of-p-Screenshot-04-01-en-21nov22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/lies-of-p-Screenshot-01-01-en-21nov22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/lies-of-p-Screenshot-06-01-en-21nov22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/lies-of-p-Screenshot-09-01-en-21nov22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/lies-of-p-Screenshot-05-01-en-21nov22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/lies-of-p-Screenshot-08-01-en-21nov22?$1600px$'},
        {type: 'video', image: 'https://img.youtube.com/vi/NH_mJFOQJzE/hqdefault.jpg', link: 'https://youtu.be/NH_mJFOQJzE'},
        // {type: 'image', image: ''},
        // {type: 'image', image: ''},
    ],
    developer: "NEOWIZ",
    platforms: ["PS4", "PS5", "Xbox Series X/S", "PC"],
    releaseDate: new Date(2023, 9-1, 19),
    category: [
        {id: '0', name: 'Ação'},
        {id: '1', name: 'RPG'},
    ],

}