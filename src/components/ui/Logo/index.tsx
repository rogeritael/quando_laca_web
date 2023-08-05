'use client'

import { LogoComponent } from "./styles"

interface LogoProps {

}

export function Logo(props : LogoProps){
    return(
        <LogoComponent>
            <span>Quando</span>
            Lança
        </LogoComponent>
    )
}