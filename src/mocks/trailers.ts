import { AssassinsCreedJade } from "./trailers/AssassinsCreedJade";
import { Avatar } from "./trailers/Avatar";
import { BabySteps } from "./trailers/BabySteps";
import { BlackMythWukong19MinGameplay } from "./trailers/BlackMythWukong19MinGameplay";
import { CODMW3 } from "./trailers/CODMW3";
import { FFVII } from "./trailers/FFVII";
import { Foamstars } from "./trailers/Foamstars";
import { GhostRunner2 } from "./trailers/GhostRunner2";
import { Ghostbusters } from "./trailers/Ghostbusters";
import { Helldivers2 } from "./trailers/Helldivers2";
import { Honkai } from "./trailers/Honkai";
import { LittleNightmaresIIIReveal } from "./trailers/LittleNightmaresIIIReveal";
import { RE4VR } from "./trailers/RE4VR";
import { SpiderMan2 } from "./trailers/SpiderMan2";
import { TalesOfArise } from "./trailers/TalesOfArise";
import { Warhammer } from "./trailers/Warhammer";
import { ZenlessZoneZero } from "./trailers/ZenlessZoneZero";

export interface TrailerProps {
    name: string;
    video_url: string;
}

export const trailers = [
    SpiderMan2,
    Avatar,
    RE4VR,
    GhostRunner2,
    Ghostbusters,
    // FFVII,
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
]