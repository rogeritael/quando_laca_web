import React, { createContext, useEffect, useState } from "react";
import { GameProps } from "@/mocks/games";
import { useFavoriteGames } from "@/hooks/useFavoriteGames";

interface ContextProps {
    favoritedGames: GameProps[];
    setFavoritedgames: React.Dispatch<React.SetStateAction<GameProps[]>>;
    addToList: (game: GameProps) => void;
    findAll: () => void;
    removeFromList: (game: GameProps) => void;
}

export const Context = createContext({} as ContextProps);

export function UserProvider({children}: {children: React.ReactNode}){
    const [favoritedGames, setFavoritedgames] = useState<GameProps[]>([])
    const { findAll, addToList, removeFromList } = useFavoriteGames();

    


    return (
        <Context.Provider value={{ favoritedGames, setFavoritedgames, findAll, addToList, removeFromList }}>
            {children}
        </Context.Provider>
    )
}