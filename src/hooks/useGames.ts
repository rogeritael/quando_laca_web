import { useState } from "react";
import { GameProps } from "@/mocks/games";
import { gameList as games } from "@/mocks/games";

export function useGames(){

    async function findAll(){
        return games
    }

    async function findById(id : string){
        const game = games.find((game) => game.id == id)
        
        
        return game;
    }

    return { findAll, findById }
}