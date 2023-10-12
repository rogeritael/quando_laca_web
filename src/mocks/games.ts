// const trailerCover = 'https://i.ytimg.com/vi/Hyh6UqP1YPM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGhACGAYgATgB&rs=AOn4CLCIXUOMnZXQJ_Q19t6h0uKoAF6aig'

import { AgathaChristieMurderontheOrientExpress } from "./games/AgathaChristieMurderontheOrientExpress";
import { AlanWakeII } from "./games/AlanWakeII";
import { AssassinsCreedMirage } from "./games/AssassinsCreedMirage";
import { AvatarFrontiersofPandora } from "./games/AvatarFrontiersofPandora";
import { BlasphemousII } from "./games/BlasphemousII";
import { CallofDutyModernWarfareIII } from "./games/CallofDutyModernWarfareIII";
import { ClockTower } from "./games/ClockTower";
import { CounterStrike2 } from "./games/CounterStrike2";
import { Cyberpunk2077PhantomLiberty } from "./games/Cyberpunk2077PhantomLiberty";
import { EndlessDungeon } from "./games/EndlessDungeon";
import { ExoCross } from "./games/ExoCross";
import { Forgotlings } from "./games/Forgotlings";
import { ForzaMotorsport } from "./games/ForzaMotorsport";
import { GangsofSherwood } from "./games/GangsofSherwood";
import { GhostrunnerII } from "./games/GhostrunnerII";
import { HellboyWebofWyrd } from "./games/HellboyWebofWyrd";
import { HelldiversIISuperCitizenionEdit } from "./games/HelldiversIISuperCitizenionEdit";
import { JustDance2024ionEdit } from "./games/JustDance2024ionEdit";
import { LiesofP } from "./games/LiesofP";
import { LordsoftheFallen } from "./games/LordsoftheFallen";
import { MortalKombat1 } from "./games/MortalKombat1";
import { MyHeroUltraRumble } from "./games/MyHeroUltraRumble";
import { Nightingale } from "./games/Nightingale";
import { OxenfreeIILostSignals } from "./games/OxenfreeIILostSignals";
import { ParcelCorps } from "./games/ParcelCorps";
import { PartyAnimals } from "./games/PartyAnimals";
import { Payday3 } from "./games/Payday3";
import { PennysBigBreakaway } from "./games/PennysBigBreakaway";
import { RobocopRogueCity } from "./games/RobocopRogueCity";
import { SonicSuperstars } from "./games/SonicSuperstars";
import { Starfield } from "./games/Starfield";
import { SuicideSquadKilltheJusticeLeague } from "./games/SuicideSquadKilltheJusticeLeague";
import { Tekken8 } from "./games/Tekken8";
import { TheDayBefore } from "./games/TheDayBefore";
import { TheGap } from "./games/TheGap";
import { UFL } from "./games/UFL";
import { Warframe1999 } from "./games/Warframe1999";
import { WitchHand } from "./games/WitchHand";
import { WizardwithaGun } from "./games/WizardwithaGun";


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
    AgathaChristieMurderontheOrientExpress,
    EndlessDungeon,
    GangsofSherwood,
    HellboyWebofWyrd,
    LordsoftheFallen,
    SonicSuperstars,
    TheGap,
    WizardwithaGun,

    BlasphemousII,
    CounterStrike2,
    OxenfreeIILostSignals,
    PartyAnimals,
    TheDayBefore,
    AvatarFrontiersofPandora,
    CallofDutyModernWarfareIII,
    Cyberpunk2077PhantomLiberty,
    GhostrunnerII,
    JustDance2024ionEdit,
    RobocopRogueCity,
    Tekken8,
    Payday3,
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
    AlanWakeII,
    AssassinsCreedMirage,
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