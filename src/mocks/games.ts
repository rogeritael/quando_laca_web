// const trailerCover = 'https://i.ytimg.com/vi/Hyh6UqP1YPM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGhACGAYgATgB&rs=AOn4CLCIXUOMnZXQJ_Q19t6h0uKoAF6aig'

import { Afterdream } from "./games/Afterdream";
import { Cyberpunk2077PhantomLiberty } from "./games/Cyberpunk2077PhantomLiberty";
import { ElPasoElsewhere } from "./games/ElPasoElsewhere";
import { EscapeFromMystwoodMansion } from "./games/EscapeFromMystwoodMansion";
import { FCMobile } from "./games/FCMobile";
import { FortunesRun } from "./games/FortunesRun";
import { ForzaMotorsport } from "./games/ForzaMotorsport";
import { InfinityStrashDragonQuestTheAdventureofDai } from "./games/InfinityStrashDragonQuestTheAdventureofDai";
import { KingdomsofEreloth } from "./games/KingdomsofEreloth";
import { LunarLux } from "./games/LunarLux";
import { MinekosNightMarket } from "./games/MinekosNightMarket";
import { MomotaroDentetsuWorldChikyuuhaKiboudeMawatteru } from "./games/MomotaroDentetsuWorldChikyuuhaKiboudeMawatteru";
import { PaleoPines } from "./games/PaleoPines";
import { ProjectPlanetEarthVsHumanity } from "./games/ProjectPlanetEarthVsHumanity";
import { Railgunners } from "./games/Railgunners";
import { RelicHuntersLegend } from "./games/RelicHuntersLegend";
import { Robodunk } from "./games/Robodunk";
import { SilentHope } from "./games/SilentHope";
import { SlaughterTheLostOutpost } from "./games/SlaughterTheLostOutpost";
import { StreetFighter6Year1AKI } from "./games/StreetFighter6Year1AKI";
import { TanksButNoTanks } from "./games/TanksButNoTanks";
import { TheDayBefore } from "./games/TheDayBefore";
import { TheseDoomedIsles } from "./games/TheseDoomedIsles";
import { Wildmender } from "./games/Wildmender";
import { WitchSpringR } from "./games/WitchSpringR";
import { Witchfire } from "./games/Witchfire";
import { YsXNordics } from "./games/YsXNordics";


interface Category {
    id: string;
    name: string;
}

interface MediaProps  {
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
    FCMobile,
    Afterdream,
    Cyberpunk2077PhantomLiberty,
    ElPasoElsewhere,
    EscapeFromMystwoodMansion,
    FortunesRun,
    ForzaMotorsport,
    InfinityStrashDragonQuestTheAdventureofDai,
    KingdomsofEreloth,
    LunarLux,
    MinekosNightMarket,
    MomotaroDentetsuWorldChikyuuhaKiboudeMawatteru,
    PaleoPines,
    SilentHope,
    StreetFighter6Year1AKI,
    TheDayBefore,
    Wildmender,
    Witchfire,
    WitchSpringR,
    YsXNordics,
    ProjectPlanetEarthVsHumanity,
    Railgunners,
    RelicHuntersLegend,
    Robodunk,
    SlaughterTheLostOutpost,
    TanksButNoTanks,
    TheseDoomedIsles,
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