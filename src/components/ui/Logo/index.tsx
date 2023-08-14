'use client'

import Link from "next/link"
import { LogoComponent } from "./styles"

interface LogoProps {

}

export function Logo(props : LogoProps){
    return(
        <Link href='/'>
        <LogoComponent>
            <span>Quando</span>
            Lança
        </LogoComponent>
        </Link>
    )
}