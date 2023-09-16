'use client'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { AddGameContaier } from "./styles"
import Link from "next/link"

export default function AddGame(){
    return(
        <AddGameContaier>
            <Link href="/Panel" className="back_page">
                <AiOutlineArrowLeft />
                <p>Voltar</p>
            </Link>
            
            <form action="">
                <input type="text" />
                <button type="submit">Adicionar</button>
            </form>
        </AddGameContaier>
    )
}