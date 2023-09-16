const trailerCover = 'https://i.ytimg.com/vi/Hyh6UqP1YPM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGhACGAYgATgB&rs=AOn4CLCIXUOMnZXQJ_Q19t6h0uKoAF6aig'

// import { AlanWake2 } from './games/AlanWake2';
// import { AssassinsCreedMirage } from './games/AssassinsCreedMirage';
// import { BaldursGate3 } from './games/BaldursGate3';
// import { BombRushCyberfunk } from './games/BombRushCyberfunk'
// import { GoodbyeVolcanoHigh } from './games/GoodbyeVolcanoHigh';

// import { LiesOfP } from './games/LiesOfP';
// import { LordsOfTheFallen } from './games/LordsOfTheFallen';
// import { MetalHellsinger } from './games/MetalHellsinger';
// import { MortalKombat1 } from './games/MortalKombat1';
// import { SpiderMan2 } from './games/SpiderMan2'
// import { Starfield } from './games/Starfield';
// import { Tekken8 } from './games/Tekken8';
// import { TrainSimWorld3 } from './games/TrainSimWorld3';

interface Category {
    id: string;
    name: string;
}

interface MediaProps  {
    type: 'image' | 'video';
    image: string;
    link?: string;
}

export interface GameProps {
    name: string;
    releaseDate: Date;
    // description: string;
    description: string[];
    developer: string;
    price: number;
    media: MediaProps[];
    platforms: string[];
    image: string;
    category: Category[];
    id: string
}

export const category: Category[] = [
    {
        id: '0',
        name: 'terror'
    },
    {
        id: '1',
        name: 'estratégia'
    },
    {
        id: '2',
        name: 'aventura'
    },
];

export const gameList: GameProps[] = [
    
]

// {
//     name: "",
//     image: "",
//     releaseDate: new Date(2023, 8, 17),
//     developer: "",
//     category: [
//         {id: category[0].id, name: category[0].name}, //
//     ],
//     platforms: [''],
//     description: "",
//     price: 100,
//     images: ['', '', '', '', ''],
// },