import Image from "next/image";
import { SmallGameCard } from "../ui/SmallGameCard";
import { LibraryComponent } from "./styles";
import arrow from '@/assets/icons/arrow_v2.svg';

import { useContext } from 'react';
import { Context } from "@/context/UserContext";

//excluir
import { gameList as games } from "@/mocks/games";
import { Empty } from "../ui/Empty";

interface MyLibraryProps {

}
export function MyLibrary(props : MyLibraryProps){
    const { gameList } = useContext(Context)

    return(
        <LibraryComponent>
            <h1>Biblioteca</h1>
            <div className="games_container">
                {gameList.map((game, index) => index < 3 && (
                    <SmallGameCard key={game.id} name={game.name} release_date={game.releaseDate} id={game.id} image={game.image} />
                ))}
                {gameList.length < 1 && (
                    <Empty listType="games" text />
                )}
            </div>
            <a href="/Library">
                <p>Ver biblioteca completa</p>
                <Image src={arrow} alt="seta ver todos os jogos adicionados aos favoritos" />
            </a>
        </LibraryComponent>
    )
}