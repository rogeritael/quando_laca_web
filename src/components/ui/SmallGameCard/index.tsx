import Image from "next/image";
import { CardContainer } from "./styles";
import menu from '@/assets/icons/Menu.svg';
import clock from '@/assets/icons/clock.svg';
import exemplo from '@/assets/jogo_exemplo.png';
import { DeleteButton } from "../DeleteButton";
import { useState } from 'react';
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import { countdown } from '@/utils/countdown';
import { useRouter } from 'next/navigation';

interface SmallGameCardProps {
    name: string;
    id: string;
    image: string;
    release_date: Date;
    v2?: boolean;
}

export function SmallGameCard({ id, image, name, release_date, v2 } : SmallGameCardProps){
    const [isDeleteButtonOpen, setIsDeleteButtonOpen] = useState(false);
    const router = useRouter();

    function handleOpenCloseMenu(){
        isDeleteButtonOpen ? setIsDeleteButtonOpen(false) : setIsDeleteButtonOpen(true) 
    }

    function handleRedirect(){
        router.push(`/About?id=${id}`)
    }

    return(
        <CardContainer v2={v2}>
            {!v2 && (
                <DeleteButton gameId={id} isVisible={isDeleteButtonOpen} setIsDeleteButtonOpen={setIsDeleteButtonOpen}/>
            )}
            <figure onClick={() => handleRedirect()}>
                <Image width={200} height={200} src={image} alt="menu do jogo" />
            </figure>
            <div className="game_info" onClick={() => handleRedirect()}>
                <h2>{name}</h2>
                <p>
                    {!v2 ? (
                        <>
                        <Image src={clock} alt="menu do jogo" />
                        {countdown(release_date) }
                        </>
                    ) : (
                        formatDate(release_date)    
                    )}
                </p>
            </div>
            {!v2 && (
                <Image className="options" src={menu} alt="menu do jogo" onClick={() => handleOpenCloseMenu()} />
            )}   
        </CardContainer>
    )
}