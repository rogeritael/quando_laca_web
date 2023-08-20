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

    isConfirmModalVisible: boolean;
    setIsConfirmModalVisible: (param: boolean) => void;

    gameIdToRemoveFromList: string;
    setGameIdToRemoveFromList: (param: string) => void;

    isLoading: boolean;
    setIsLoading: (param: boolean) => void;

    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export const Context = createContext({} as ContextProps);

export function UserProvider({children}: {children: React.ReactNode}){
    const { findAll, addToList, removeFromList, gameList, setGameList } = useFavoriteGames();
    const [isLoading, setIsLoading] = useState(false);
    
    const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false)
    const [gameIdToRemoveFromList, setGameIdToRemoveFromList] = useState('')

    //mover para outro context mais para frente?
    const [searchTerm, setSearchTerm ] = useState('')
    //mover para outro context mais para frente?

    return (
        <Context.Provider value={{
            gameList, setGameList,
            findAll, addToList, removeFromList,
            searchTerm, setSearchTerm,
            isLoading, setIsLoading,
            isConfirmModalVisible, setIsConfirmModalVisible,
            gameIdToRemoveFromList, setGameIdToRemoveFromList
        }}>
            {children}
        </Context.Provider>
    )
}