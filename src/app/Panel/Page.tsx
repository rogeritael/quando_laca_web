'use client'
import { Option } from "./PanelComponents/Option";
import { PanelContainer } from "./styles";

export default function Panel(){
    return (
        <PanelContainer>
            <Option option="Adicionar Jogo" link="/Panel/AddGame" />
            <Option option="Adicionar Trailer" link="/" />
        </PanelContainer>
    )
}