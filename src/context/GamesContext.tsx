import React, { createContext, useEffect, useState } from "react";
import { useGames } from "@/hooks/useGames";

interface ContextProps {

}

export const Context = createContext({} as ContextProps);

export function GameProvider({children}: {children: React.ReactNode}){
    const { findAll, findById } = useGames();

    return (
        <Context.Provider value={{findAll, findById}}>
            {children}
        </Context.Provider>
    )
}