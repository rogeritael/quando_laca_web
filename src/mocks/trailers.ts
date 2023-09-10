import { AssassinsCreedJade } from "./trailers/AssassinsCreedJade";
import { BlackMythWukong19MinGameplay } from "./trailers/BlackMythWukong19MinGameplay";
import { CODMW3 } from "./trailers/CODMW3";
import { LittleNightmaresIIIReveal } from "./trailers/LittleNightmaresIIIReveal";
import { Warhammer } from "./trailers/Warhammer";
import { ZenlessZoneZero } from "./trailers/ZenlessZoneZero";

export interface TrailerProps {
    cover?: string;
    video_url: string;
    game_id: string;
}

export const trailers = [
    LittleNightmaresIIIReveal,
    CODMW3,
    BlackMythWukong19MinGameplay,
    Warhammer,
    ZenlessZoneZero,
    AssassinsCreedJade,
]