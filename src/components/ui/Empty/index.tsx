import Image from "next/image";
import { EmptyComponent } from "./styles";

import searchIcon from '@/assets/icons/empty_search_icon.svg'
import Link from "next/link";

interface EmptyProps {
    listType: 'notifications' | 'search' | 'games';
    button?: boolean;
}

const content = [
    {
        notifications_text: 'Desculpe, não encontramos nenhum jogo correspondente à sua pesquisa.'
    }
]

export function Empty({ listType, button } : EmptyProps){
    return(
        <EmptyComponent>
            <figure className="icon_container">
                <Image style={{ objectFit: "fill" }} alt="icone de pesquisa" src={searchIcon} />
            </figure>
            <p className="description">
                {content[0].notifications_text}
            </p>
            {button && (
                <Link href={'/'} className="button">
                    voltar para a home
                </Link>
            )}
        </EmptyComponent>
    )
}