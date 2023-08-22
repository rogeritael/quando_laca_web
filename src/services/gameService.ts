import { useState } from "react";
import { GameProps } from "@/mocks/games";

import { gameList as games } from "@/mocks/games";
import { popular_games } from "@/mocks/popular_games";

export function gamesService(){

    async function findAll(){
        
        const popular = await findPopularGames();
        const upcomingGames = await findComingSoon()
        const justReleasedGames = await findJustReleased()
        const nextReleases = await findNextReleases()
        
        const allGames = {
            trailers: games,
            popular: popular,
            nextReleases: nextReleases,
            justReleased: justReleasedGames,
            upcomingGames: upcomingGames
        }
        
        return allGames
    }

    async function findPopularGames(){
        const popularGames = games.filter(game => popular_games.includes(game.id));
    
        return popularGames;
    }

    async function findById(id : string){
        const game = games.find((game) => game.id == id)
        
        
        return game;
    }

    //todos que ainda não foram lançados - dia do lançamento maior que 0
    async function findNextReleases(){
        const today = new Date();

        const nextReleases = games.filter(game => game.releaseDate > today);
        return nextReleases;

    }

    //chegando em até dois meses
    async function findComingSoon(){
        const today = new Date();
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + 60); // Adiciona 60 dias à data atual
    
        const upcomingGames = games.filter(game => game.releaseDate >= today && game.releaseDate <= futureDate);

        return upcomingGames
    }

    //lançados em até 3 meses
    async function findJustReleased(){
        const today = new Date();
        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 60); // retira 60 dias à data atual
    
        const justReleasedGames = games.filter(game => game.releaseDate <= today && game.releaseDate >= pastDate);

        return justReleasedGames
    }

    return { findAll, findById, findJustReleased, findPopularGames }
}