// const trailerCover = 'https://i.ytimg.com/vi/Hyh6UqP1YPM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGhACGAYgATgB&rs=AOn4CLCIXUOMnZXQJ_Q19t6h0uKoAF6aig'

import { ClockTower } from "./games/ClockTower";
import { ExoCross } from "./games/ExoCross";
import { Forgotlings } from "./games/Forgotlings";
import { ForzaMotorsport } from "./games/ForzaMotorsport";
import { HelldiversIISuperCitizenionEdit } from "./games/HelldiversIISuperCitizenionEdit";
import { LiesofP } from "./games/LiesofP";
import { MortalKombat1 } from "./games/MortalKombat1";
import { MyHeroUltraRumble } from "./games/MyHeroUltraRumble";
import { Nightingale } from "./games/Nightingale";
import { ParcelCorps } from "./games/ParcelCorps";
import { PennysBigBreakaway } from "./games/PennysBigBreakaway";
import { Starfield } from "./games/Starfield";
import { SuicideSquadKilltheJusticeLeague } from "./games/SuicideSquadKilltheJusticeLeague";
import { UFL } from "./games/UFL";
import { Warframe1999 } from "./games/Warframe1999";
import { WitchHand } from "./games/WitchHand";


interface Category {
    id: string;
    name: string;
}

export interface MediaProps  {
    type: string;
    image: string;
    link?: string;
}

export interface GameProps {
    name: string;
    releaseDate: Date;
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
    ExoCross,
    UFL,
    Starfield,
    MortalKombat1,
    LiesofP,
    MyHeroUltraRumble,
    SuicideSquadKilltheJusticeLeague,
    HelldiversIISuperCitizenionEdit,
    Nightingale,
    PennysBigBreakaway,
    ClockTower,
    WitchHand,
    Forgotlings,
    ParcelCorps,
    Warframe1999,
    ForzaMotorsport,
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