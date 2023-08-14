'use client'
import React, { createContext, useEffect, useState } from "react";
import { GameProps } from "@/mocks/games";
import { useFavoriteGames } from "@/hooks/useFavoriteGames";

interface ContextProps {
    gameList: GameProps[];
    setGameList: React.Dispatch<React.SetStateAction<GameProps[]>>;
    addToList: (game: GameProps) => void;
    findAll: () => void;
    removeFromList: (id: string) => void;
}

export const Context = createContext({} as ContextProps);

export function UserProvider({children}: {children: React.ReactNode}){
    const { findAll, addToList, removeFromList, gameList, setGameList } = useFavoriteGames();

    return (
        <Context.Provider value={{ gameList, setGameList, findAll, addToList, removeFromList }}>
            {children}
        </Context.Provider>
    )
}