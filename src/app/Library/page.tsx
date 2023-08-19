'use client'
import { LibraryContainer } from "./styles";
import { Context } from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import arrow from '@/assets/icons/arrow_v2.svg'
import { SideMenu } from "@/components/SideMenu";
import { Header } from "@/components/Header";
import { GameInList } from "@/components/ui/GameInList";
import { Logo } from "@/components/ui/Logo";
import bell from '@/assets/icons/bell.svg';
import { Search } from "@/components/ui/Search";
import { ConfirmModal } from "@/components/ui/ConfirmModal";

interface LibraryProps {

}
export default function Library(props : LibraryProps){
    const { gameList, removeFromList } = useContext(Context);
    const [gameId, setGameId] = useState('')
    const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false)

    function handleRemoveFromList(id: string){
        setGameId(id);
        setIsConfirmModalVisible(true)
    }

    return(
        <LibraryContainer>
            <ConfirmModal gameId={gameId} isConfirmModalVisible={isConfirmModalVisible} setIsConfirmModalVisible={setIsConfirmModalVisible} removeFromList={removeFromList}/>
            <SideMenu />
            
            <div className="main">
                <div className="header_container">
                    <Header />

                    <div className="logo_container">
                        <Logo />
                        <Image src={bell} alt="notificações" />
                    </div>
                </div>

                {/* <Link href="/" className="back_link">
                    <Image src={arrow} alt="ícone voltar para a home" />
                    <p>voltar</p>
                </Link> */}
                
                <h1 className="page_title">Meus Jogos favoritos</h1>

                <div className="games_container">
                    {gameList.map((game) => (
                        <GameInList
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            developer={game.developer}
                            image={game.image}
                            release_date={game.releaseDate}
                            removeGame={handleRemoveFromList}
                        />
                    ))}
                </div>
            </div>
        </LibraryContainer>
    )
}