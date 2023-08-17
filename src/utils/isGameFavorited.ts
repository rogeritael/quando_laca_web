import { GameProps } from "@/mocks/games"

interface isGameFavoitedProps {
    gameId: string;
    gameList: GameProps[];
}

export function isGameAlreadyAdded({ gameId, gameList }: isGameFavoitedProps){
    const isGameAlreadyAdded = gameList.find((game) => game.id === gameId)

    console.log(isGameAlreadyAdded)
    if(isGameAlreadyAdded){
        return true
    } else {
        return false
    }

}