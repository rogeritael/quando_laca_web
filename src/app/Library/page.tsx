'use client'
import { LibraryContainer } from "./styles";
import { Context } from "@/context/UserContext";
import { useContext } from "react";

interface LibraryProps {

}
export default function Library(props : LibraryProps){
    const { gameList } = useContext(Context);

    return(
        <LibraryContainer>
            {gameList.map((game) => (
                <div key={game.id}>
                    <p>{game.name}</p>
                    <img src={game.image}></img>
                </div>
            ))}
        </LibraryContainer>
    )
}