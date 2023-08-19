'use client'
import React, { createContext, useEffect, useState } from "react";
import { GameProps } from "@/mocks/games";
import { useFavoriteGames } from "@/hooks/useFavoriteGames";
import { useFlashMessage } from "@/hooks/useFlashMessage";

interface ContextProps {
    gameList: GameProps[];
    setGameList: React.Dispatch<React.SetStateAction<GameProps[]>>;
    addToList: (game: GameProps) => void;
    findAll: () => void;
    removeFromList: (id: string) => void;
    isLoading: boolean;
    setIsLoading: (param: boolean) => void;

    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export const Context = createContext({} as ContextProps);

export function UserProvider({children}: {children: React.ReactNode}){
    const { findAll, addToList, removeFromList, gameList, setGameList } = useFavoriteGames();
    const [isLoading, setIsLoading] = useState(false)

    //mover para outro context mais para frente?
    const [searchTerm, setSearchTerm ] = useState('')
    //mover para outro context mais para frente?

    return (
        <Context.Provider value={{ gameList, setGameList, findAll, addToList, removeFromList, searchTerm, setSearchTerm, isLoading, setIsLoading }}>
            {children}
        </Context.Provider>
    )
}