// const trailerCover = 'https://i.ytimg.com/vi/Hyh6UqP1YPM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGhACGAYgATgB&rs=AOn4CLCIXUOMnZXQJ_Q19t6h0uKoAF6aig'

import { Afterdream } from "./games/Afterdream";
import { AtLightSpeed } from "./games/AtLightSpeed";
import { Cyberpunk2077PhantomLiberty } from "./games/Cyberpunk2077PhantomLiberty";
import { ElPasoElsewhere } from "./games/ElPasoElsewhere";
import { EscapeFromMystwoodMansion } from "./games/EscapeFromMystwoodMansion";
import { FCMobile } from "./games/FCMobile";
import { FortunesRun } from "./games/FortunesRun";
import { ForzaMotorsport } from "./games/ForzaMotorsport";
import { HellsweeperVR } from "./games/HellsweeperVR";
import { InfinityStrashDragonQuestTheAdventureofDai } from "./games/InfinityStrashDragonQuestTheAdventureofDai";
import { KingdomsofEreloth } from "./games/KingdomsofEreloth";
import { LunarLux } from "./games/LunarLux";
import { MenofWarII } from "./games/MenofWarII";
import { MinekosNightMarket } from "./games/MinekosNightMarket";
import { MomotaroDentetsuWorldChikyuuhaKiboudeMawatteru } from "./games/MomotaroDentetsuWorldChikyuuhaKiboudeMawatteru";
import { MoonstoneIsland } from "./games/MoonstoneIsland";
import { MortalKombat1 } from "./games/MortalKombat1";
import { PaleoPines } from "./games/PaleoPines";
import { PartyAnimals } from "./games/PartyAnimals";
import { Payday3 } from "./games/Payday3";
import { ProjectPlanetEarthVsHumanity } from "./games/ProjectPlanetEarthVsHumanity";
import { Railgunners } from "./games/Railgunners";
import { RelicHuntersLegend } from "./games/RelicHuntersLegend";
import { ResidentEvil4SeparateWays } from "./games/ResidentEvil4SeparateWays";
import { Robodunk } from "./games/Robodunk";
import { SilentHope } from "./games/SilentHope";
import { SlaughterTheLostOutpost } from "./games/SlaughterTheLostOutpost";
import { StreetFighter6Year1AKI } from "./games/StreetFighter6Year1AKI";
import { SuckIt } from "./games/SuckIt";
import { SuperAdventureHand } from "./games/SuperAdventureHand";
import { TanksButNoTanks } from "./games/TanksButNoTanks";
import { TheBunnyGraveyard } from "./games/TheBunnyGraveyard";
import { TheDayBefore } from "./games/TheDayBefore";
import { TheExpanseATelltaleSeriesEpisode5EuropasFolly } from "./games/TheExpanseATelltaleSeriesEpisode5EuropasFolly";
import { TheseDoomedIsles } from "./games/TheseDoomedIsles";
import { ThiefSimulator2 } from "./games/ThiefSimulator2";
import { Warhaven } from "./games/Warhaven";
import { Wildmender } from "./games/Wildmender";
import { WitchSpringR } from "./games/WitchSpringR";
import { Witchfire } from "./games/Witchfire";
import { YsXNordics } from "./games/YsXNordics";
import { ZoriaAgeofShattering } from "./games/ZoriaAgeofShattering";


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
    AtLightSpeed,
    Cyberpunk2077PhantomLiberty,
    HellsweeperVR,
    MenofWarII,
    MoonstoneIsland,
    MortalKombat1,
    PartyAnimals,
    Payday3,
    ResidentEvil4SeparateWays,
    SuckIt,
    SuperAdventureHand,
    TheBunnyGraveyard,
    TheExpanseATelltaleSeriesEpisode5EuropasFolly,
    ThiefSimulator2,
    Warhaven,
    ZoriaAgeofShattering,
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