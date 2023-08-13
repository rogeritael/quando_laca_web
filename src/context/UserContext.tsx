import React, { createContext, useEffect, useState } from "react";
import { GameProps } from "@/mocks/games";

interface ContextProps {
    favoritedGames: GameProps[];
    setFavoritedgames: () => void; 
}

export const Context = createContext({} as ContextProps);

export function UserProvider({children}: {children: React.ReactNode}){
    const [favoritedGames, setFavoritedgames] = useState<GameProps[]>([])


    return (
        <Context.Provider value={favoritedGames, setFavoritedgames}>
            {children}
        </Context.Provider>
    )
}