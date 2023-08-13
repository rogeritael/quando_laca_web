import Image from "next/image";
import { SmallGameCard } from "../ui/SmallGameCard";
import { LibraryComponent } from "./styles";
import arrow from '@/assets/icons/arrow_v2.svg';

//excluir
import { gameList as games } from "@/mocks/games";

interface MyLibraryProps {

}
export function MyLibrary(props : MyLibraryProps){
    return(
        <LibraryComponent>
            <h1>Biblioteca</h1>
            <div className="games_container">
                <SmallGameCard key={games[1].id} name={games[1].name} release_date={games[1].releaseDate} id={games[1].id} image={games[1].image} />
                <SmallGameCard key={games[5].id} name={games[5].name} release_date={games[5].releaseDate} id={games[5].id} image={games[5].image} />
                <SmallGameCard key={games[8].id} name={games[8].name} release_date={games[8].releaseDate} id={games[8].id} image={games[8].image} />
            </div>
            <a href="">
                <p>Ver biblioteca completa</p>
                <Image src={arrow} alt="seta ver todos os jogos adicionados aos favoritos" />
            </a>
        </LibraryComponent>
    )
}