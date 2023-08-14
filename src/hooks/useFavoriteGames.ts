import { useEffect, useState } from "react"
import { GameProps } from './../mocks/games';

export function useFavoriteGames(){
    const [gameList, setGameList] = useState<GameProps[]>([])

    useEffect(() => {

        const favoritedGames = findAll();
        setGameList(favoritedGames);

    }, [])

    function findAll(){
        const storedGamesJSON = localStorage.getItem('favorites');

        const storedGames: GameProps[] = storedGamesJSON ? JSON.parse(storedGamesJSON) : [];
        return storedGames;
    }

    function addToList(game: GameProps){
        const storedGames = findAll();

        const isAlreadyfavorited = storedGames.find((storedGame) => storedGame.id === game.id);
        if(isAlreadyfavorited){
            return
        }

        storedGames.push(game)

        localStorage.setItem('favorites', JSON.stringify(storedGames))
        setGameList(storedGames);
    }

    function removeFromList(id: string){
        const storedGames = findAll();
        const updatedGames = storedGames.filter((storedGame) => storedGame.id !== id);
        localStorage.setItem('favorites', JSON.stringify(updatedGames));
        setGameList(updatedGames);
    }

    return { findAll, addToList, removeFromList, gameList, setGameList }
}