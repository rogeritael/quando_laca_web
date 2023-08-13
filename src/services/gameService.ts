import { useState } from "react";
import { GameProps } from "@/mocks/games";

import { gameList as games } from "@/mocks/games";
import { popular_games } from "@/mocks/popular_games";

export function gamesService(){

    async function findAll(){
        const popular = games.filter(game => popular_games.includes(game.id));

        const allGames = {
            trailers: games,
            popular: popular,
            recentlyAdded: games,
            soon: games
        }
        
        return allGames
    }

    async function findById(id : string){
        const game = games.find((game) => game.id == id)
        
        
        return game;
    }

    return { findAll, findById }
}