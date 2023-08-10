import Image from "next/image";
import { CardContainer } from "./styles";
import menu from '@/assets/icons/cardMenu.svg';
import clock from '@/assets/icons/clock.svg';
import exemplo from '@/assets/jogo_exemplo.png';
import { DeleteButton } from "../DeleteButton";

interface SmallGameCardProps {
    nome: string;
    data_lancamento: string;
    v2?: boolean;
}

export function SmallGameCard({ nome, data_lancamento, v2 } : SmallGameCardProps){
    return(
        <CardContainer v2={v2}>
            {!v2 && (
                <DeleteButton />
            )}
            <figure>
                <Image src={exemplo} alt="menu do jogo" />
            </figure>
            <div className="game_info">
                <h2>{nome}</h2>
                <p>
                    {!v2 && (
                        <Image src={clock} alt="menu do jogo" />
                    )}
                    {data_lancamento}
                </p>
            </div>
            {!v2 && (
                <Image className="options" src={menu} alt="menu do jogo" />
            )}   
        </CardContainer>
    )
}