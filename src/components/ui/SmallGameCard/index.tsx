import Image from "next/image";
import { CardContainer } from "./styles";
import menu from '@/assets/icons/cardMenu.svg';
import clock from '@/assets/icons/clock.svg';
import exemplo from '@/assets/jogo_exemplo.png';

interface SmallGameCardProps {
    nome: string;
    data_lancamento: string;
}

export function SmallGameCard({ nome, data_lancamento } : SmallGameCardProps){
    return(
        <CardContainer>
            <figure>
                <Image src={exemplo} alt="menu do jogo" />
            </figure>
            <div className="game_info">
                <h2>{nome}</h2>
                <p>
                    <Image src={clock} alt="menu do jogo" />
                    {data_lancamento}
                </p>
            </div>
            <Image className="options" src={menu} alt="menu do jogo" />
        </CardContainer>
    )
}