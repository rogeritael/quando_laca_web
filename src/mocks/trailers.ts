import { LittleNightmaresIIIReveal } from "./trailers/LittleNightmaresIIIReveal";

export interface TrailerProps {
    cover: string;
    video_url: string;
    game_id: string;
}

export const trailers = [
    LittleNightmaresIIIReveal
]