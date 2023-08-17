import { gameList as games } from "@/mocks/games";
import { GameProps } from "@/mocks/games";


export function isAVideoLink(link: string){
    if(link.endsWith('.png') || link.endsWith('.jpeg') || link.endsWith('.jpeg')){
        return true
    } else {
        return false
    }
}