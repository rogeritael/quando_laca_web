'use client'
import { TesteContainer } from "./styles";
import { useContext } from 'react';
import { Context } from "@/context/UserContext";
import { useEffect } from 'react';
import { gameList as games } from "@/mocks/games";



export default function Teste(){
    const { findAll, addToList, removeFromList, gameList, setGameList } = useContext(Context)

    useEffect(() => {

        addToList(games[1])

    }, [])
    
    return(
        <TesteContainer>
            <button onClick={() => findAll()}>findAll</button>
            <button onClick={() => addToList(games[3])}>addToList</button>
            <button onClick={() => removeFromList(games[3].id)}>removeFromList</button>
            <div>
                <h1>Jogos</h1><br/>
                <div>
                    {gameList.map((game) => (
                        <div key={game.id}>
                            <p>{game.name}</p>
                            <p>{game.id}</p>
                        </div>
                    ))}
                </div>
            </div>
        </TesteContainer>
    )
}