'use client'
import { LibraryContainer } from "./styles";
import { Context } from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import arrow from '@/assets/icons/arrow_v2.svg'
import { SideMenu } from "@/components/SideMenu";
import { Header } from "@/components/Header";
import { GameInList } from "@/components/ui/GameInList";

interface LibraryProps {

}
export default function Library(props : LibraryProps){
    const { gameList } = useContext(Context);

    return(
        <LibraryContainer>
            <SideMenu />
            
            <div className="main">
                <Header />

                <Link href="/">
                    <Image src={arrow} alt="ícone voltar para a home" />
                    <p>voltar</p>
                </Link>
                
                <div>
                    <h1>Meus Jogos favoritos</h1>
                </div>

                <div className="games_container">
                    {gameList.map((game) => (
                        <GameInList
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            developer={game.developer}
                            image={game.image}
                            release_date={game.releaseDate}
                        />
                    ))}
                </div>
            </div>
        </LibraryContainer>
    )
}