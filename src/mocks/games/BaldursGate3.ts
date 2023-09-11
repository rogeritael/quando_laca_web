import { GameProps, category } from "../games"

export const BaldursGate3: GameProps = {

    id: "baldurs_gate_3",
    name: "Baldur’s Gate 3",
    description: `Junte sua equipe e embarque numa campanha épica neste RPG da nova geração de Dungeons & Dragons, dos criadores de Divinity: Original Sin II.

    A terra de Faerûn está sendo atacada. Capturado e infectado pelos Devoradores de Mentes invasores, você terá que escolher entre resistir à corrupção deles ou aceitar o poder misterioso que cresce dentro de você.
    
    Jogue com personagens de origem pré-determinada ou crie e personalize seu protagonista e sinta a emoção de uma história dinâmica que é transformada pelos dados lançados.
    
    Junte-se a um elenco de personagens complexos e participe de saques, lutas e romances pelos Reinos Esquecidos e além. Lance os dados e saia com vantagens e desvantagens em combates táticos e fluidos.
    
    O destino dos Reinos Esquecidos está nas suas mãos.`,
    image: "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg",
    price: 100,
    media: [
        {type: 'video', image: 'https://img.youtube.com/vi/bgqGdIoa52s/hqdefault.jpg', link: 'https://youtu.be/UgTFtD2sHdE'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/baldurs-gate-3-screenshot-05-en-29mar23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/baldurs-gate-3-screenshot-07-en-29mar23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/baldurs-gate-3-screenshot-03-en-29mar23?$1600px$'},
    ],
    developer: "Larian Studios",
    platforms: ["PS5"],
    releaseDate: new Date(2023, 9-1, 2),
    category: [
        {id: '0', name: 'RPG'},
    ],

}