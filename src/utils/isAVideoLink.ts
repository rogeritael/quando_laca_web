import { gameList as games } from "@/mocks/games";
import { GameProps } from "@/mocks/games";

interface MediaProps {
    media: {
        type: 'video' | 'image';
        image: string;
        link?: string;
    }
}

export function isAVideoLink({ media }: MediaProps){
    if(media.type === 'video'){
        return true
    } else if(media.type === 'image') {
        return false
    }
}