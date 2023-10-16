import { ACMirage } from "./trailers/ACMirage";
import { AlanWake2 } from "./trailers/AlanWake2";
import { AssassinsCreedJade } from "./trailers/AssassinsCreedJade";
import { Avatar } from "./trailers/Avatar";
import { BabySteps } from "./trailers/BabySteps";
import { BlackMythWukong19MinGameplay } from "./trailers/BlackMythWukong19MinGameplay";
import { COD3Multiplayer } from "./trailers/COD3Multiplayer";
import { COD3Zombies } from "./trailers/COD3Zombies";
import { CODMW3 } from "./trailers/CODMW3";
import { CS2 } from "./trailers/CS2";
import { CallofDutyMW3 } from "./trailers/CallofDutyMW3";
import { FFVII } from "./trailers/FFVII";
import { Foamstars } from "./trailers/Foamstars";
import { Fortnitemares } from "./trailers/Fortnitemares";
import { GhostRunner2 } from "./trailers/GhostRunner2";
import { Ghostbusters } from "./trailers/Ghostbusters";
import { Helldivers2 } from "./trailers/Helldivers2";
import { Honkai } from "./trailers/Honkai";
import { LOTFLaunch } from "./trailers/LOTFLaunch";
import { LittleNightmaresIIIReveal } from "./trailers/LittleNightmaresIIIReveal";
import { LordsOfTheFalllen } from "./trailers/LordsOfTheFalllen";
import { RE4VR } from "./trailers/RE4VR";
import { SpiderMan2 } from "./trailers/SpiderMan2";
import { SpiderMan202 } from "./trailers/SpiderMan202";
import { TalesOfArise } from "./trailers/TalesOfArise";
import { Warhammer } from "./trailers/Warhammer";
import { ZenlessZoneZero } from "./trailers/ZenlessZoneZero";

export interface TrailerProps {
    name: string;
    video_url: string;
}

export const trailers = [
    LOTFLaunch,
    Fortnitemares,
    COD3Multiplayer,
    COD3Zombies,
    ACMirage,
    AlanWake2,
    CallofDutyMW3,
    CS2,
    LordsOfTheFalllen,
    SpiderMan2,
    Avatar,
    RE4VR,
    GhostRunner2,
    Ghostbusters,
    TalesOfArise,
    BabySteps,
    Foamstars,
    Helldivers2,
    Honkai,
    LittleNightmaresIIIReveal,
    CODMW3,
    BlackMythWukong19MinGameplay,
    Warhammer,
    ZenlessZoneZero,
    AssassinsCreedJade,
    // SpiderMan202
]