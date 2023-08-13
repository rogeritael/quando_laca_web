import { useState } from "react";
import { GameProps } from "@/mocks/games";

import { gameList as games } from "@/mocks/games";
import { popular_games } from "@/mocks/popular_games";

export function gamesService(){

    async function findAll(){
        const today = new Date();
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + 30); // Adiciona 30 dias à data atual
        
        const popular = games.filter(game => popular_games.includes(game.id));
        const upcomingGames = games.filter(game => game.releaseDate >= today && game.releaseDate <= futureDate);

        const allGames = {
            trailers: games,
            popular: popular,
            recentlyAdded: games,
            upcomingGames: upcomingGames
        }
        
        return allGames
    }

    async function findById(id : string){
        const game = games.find((game) => game.id == id)
        
        
        return game;
    }

    return { findAll, findById }
}