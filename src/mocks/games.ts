// const trailerCover = 'https://i.ytimg.com/vi/Hyh6UqP1YPM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGhACGAYgATgB&rs=AOn4CLCIXUOMnZXQJ_Q19t6h0uKoAF6aig'

import { Afterdream } from "./games/Afterdream";
import { AlaskanRoadTruckers } from "./games/AlaskanRoadTruckers";
import { AssassinsCreedMirage } from "./games/AssassinsCreedMirage";
import { AtLightSpeed } from "./games/AtLightSpeed";
import { AvatarTheLastAirbenderQuestforBalance } from "./games/AvatarTheLastAirbenderQuestforBalance";
import { BangOnBallsChronicles } from "./games/BangOnBallsChronicles";
import { BattleCakes } from "./games/BattleCakes";
import { CassetteBeastsPieroftheUnknown } from "./games/CassetteBeastsPieroftheUnknown";
import { ChaosonWheels } from "./games/ChaosonWheels";
import { CitiesSkylinesII } from "./games/CitiesSkylinesII";
import { Cocoon } from "./games/Cocoon";
import { Cricket24 } from "./games/Cricket24";
import { Cyberpunk2077PhantomLiberty } from "./games/Cyberpunk2077PhantomLiberty";
import { DetectivePikachuReturns } from "./games/DetectivePikachuReturns";
import { DolphinSpiritOceanMission } from "./games/DolphinSpiritOceanMission";
import { EASportsFC24 } from "./games/EASportsFC24";
import { ElPasoElsewhere } from "./games/ElPasoElsewhere";
import { EndlessDungeon } from "./games/EndlessDungeon";
import { EscapeFromMystwoodMansion } from "./games/EscapeFromMystwoodMansion";
import { FCMobile } from "./games/FCMobile";
import { FateSamuraiRemnant } from "./games/Fate_SamuraiRemnant";
import { FortunesRun } from "./games/FortunesRun";
import { ForzaMotorsport } from "./games/ForzaMotorsport";
import { GangsofSherwood } from "./games/GangsofSherwood";
import { GargoylesRemastered } from "./games/GargoylesRemastered";
import { GhostrunnerII } from "./games/GhostrunnerII";
import { HellboyWebofWyrd } from "./games/HellboyWebofWyrd";
import { HellsweeperVR } from "./games/HellsweeperVR";
import { HotWheelsUnleashed2Turbocharged } from "./games/HotWheelsUnleashed2Turbocharged";
import { InfinityStrashDragonQuestTheAdventureofDai } from "./games/InfinityStrashDragonQuestTheAdventureofDai";
import { JustDance2024ionEdit } from "./games/JustDance2024";
import { KingdomsofEreloth } from "./games/KingdomsofEreloth";
import { LordsoftheFallen } from "./games/LordsoftheFallen";
import { LunarLux } from "./games/LunarLux";
import { MarvelsSpiderMan2 } from "./games/MarvelsSpiderMan2";
import { MenofWarII } from "./games/MenofWarII";
import { MinekosNightMarket } from "./games/MinekosNightMarket";
import { MomotaroDentetsuWorldChikyuuhaKiboudeMawatteru } from "./games/MomotaroDentetsuWorldChikyuuhaKiboudeMawatteru";
import { MoonstoneIsland } from "./games/MoonstoneIsland";
import { MortalKombat1 } from "./games/MortalKombat1";
import { PaleoPines } from "./games/PaleoPines";
import { PartyAnimals } from "./games/PartyAnimals";
import { Payday3 } from "./games/Payday3";
import { PhantomFury } from "./games/PhantomFury";
import { PhantomHellcat } from "./games/PhantomHellcat";
import { ProjectPlanetEarthVsHumanity } from "./games/ProjectPlanetEarthVsHumanity";
import { Railgunners } from "./games/Railgunners";
import { RearSekai } from "./games/RearSekai";
import { RelicHuntersLegend } from "./games/RelicHuntersLegend";
import { ResidentEvil4SeparateWays } from "./games/ResidentEvil4SeparateWays";
import { Robodunk } from "./games/Robodunk";
import { SilentHope } from "./games/SilentHope";
import { SlaughterTheLostOutpost } from "./games/SlaughterTheLostOutpost";
import { SonicSuperstars } from "./games/SonicSuperstars";
import { StreetFighter6Year1AKI } from "./games/StreetFighter6Year1AKI";
import { SuckIt } from "./games/SuckIt";
import { SuperAdventureHand } from "./games/SuperAdventureHand";
import { SuperMarioBrosWonder } from "./games/SuperMarioBrosWonder";
import { TanksButNoTanks } from "./games/TanksButNoTanks";
import { TheBunnyGraveyard } from "./games/TheBunnyGraveyard";
import { TheDayBefore } from "./games/TheDayBefore";
import { TheExpanseATelltaleSeriesEpisode5EuropasFolly } from "./games/TheExpanseATelltaleSeriesEpisode5EuropasFolly";
import { TheGap } from "./games/TheGap";
import { TheseDoomedIsles } from "./games/TheseDoomedIsles";
import { ThiefSimulator2 } from "./games/ThiefSimulator2";
import { TotalWarPharaoh } from "./games/TotalWarPharaoh";
import { WarhammerVermintide2Necromancer } from "./games/WarhammerVermintide2Necromancer";
import { Warhaven } from "./games/Warhaven";
import { Wildmender } from "./games/Wildmender";
import { WitchSpringR } from "./games/WitchSpringR";
import { Witchfire } from "./games/Witchfire";
import { WoodlandTown } from "./games/WoodlandTown";
import { Worldless } from "./games/Worldless";
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
    AlaskanRoadTruckers,
    AssassinsCreedMirage,
    AvatarTheLastAirbenderQuestforBalance,
    BangOnBallsChronicles,
    BattleCakes,
    CassetteBeastsPieroftheUnknown,
    ChaosonWheels,
    CitiesSkylinesII,
    Cocoon,
    Cricket24,
    DetectivePikachuReturns,
    DolphinSpiritOceanMission,
    EASportsFC24,
    EndlessDungeon,
    FateSamuraiRemnant,
    GangsofSherwood,
    GargoylesRemastered,
    GhostrunnerII,
    HellboyWebofWyrd,
    HotWheelsUnleashed2Turbocharged,
    JustDance2024ionEdit,
    LordsoftheFallen,
    MarvelsSpiderMan2,
    PhantomFury,
    PhantomHellcat,
    RearSekai,
    SonicSuperstars,
    SuperMarioBrosWonder,
    TheGap,
    TotalWarPharaoh,
    WarhammerVermintide2Necromancer,
    WoodlandTown,
    Worldless,
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