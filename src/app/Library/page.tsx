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
import { Bell } from "@/components/ui/bell";
import { MobileHeader } from "@/components/MobileHeader";
import { CategoryList } from "@/components/CategoryList/CategoryList";

interface LibraryProps {

}
export default function Library(props : LibraryProps){
    const { gameList, removeFromList, setGameIdToRemoveFromList, setIsConfirmModalVisible } = useContext(Context);

    function handleRemoveFromList(id: string){
        setGameIdToRemoveFromList(id);
        setIsConfirmModalVisible(true)
    }

    return(
        <LibraryContainer>
            <SideMenu />
            
            <div className="main">
                <MobileHeader />
                <CategoryList className="category_list_mobile"/>
                <div className="header_container">
                    <Header />

                    <div className="logo_container">
                        <Logo />
                        <Bell />
                    </div>
                </div>
                <h1 className="page_title">Meus Jogos favoritos</h1>

                <div className="games_container">
                    {gameList.map((game, index) => (
                        <GameInList
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            developer={game.developer}
                            image={game.image}
                            release_date={game.releaseDate}
                            removeGame={handleRemoveFromList}
                            animationDelay={index == 0 ? 0 : index * 200}
                        />
                    ))}
                </div>
            </div>
        </LibraryContainer>
    )
}