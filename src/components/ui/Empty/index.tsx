import Image from "next/image";
import { EmptyComponent } from "./styles";
import Link from "next/link";
import { useEffect, useState } from "react";

import searchIcon from '@/assets/icons/empty_search_icon.svg'
import notificationIcon from '@/assets/icons/mailbox_icon.svg'
import gameListIcon from '@/assets/icons/box_icon.svg'

interface EmptyProps {
    listType: 'notifications' | 'search' | 'games';
    button?: boolean;
    text?: boolean;
}

const texts = [
    'Desculpe, não encontramos nenhum jogo correspondente à sua pesquisa.',
    'Não há notificações disponíveis no momento. Adicione jogos a sua lista para receber novas atualizações.',
    'Sua lista de jogos favoritos está vazia no momento! Explore novos jogos para receber atualizações.'
]

interface ContentProps {
    content: string;
    link: string;
    icon?: any;
}

export function Empty({ listType, button, text } : EmptyProps){
    const [informations, setInformations] = useState<ContentProps>({content: '', link: '', icon: ''})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            if(listType === 'search'){
                await setInformations({
                    content: texts[0],
                    link: '/',
                    // icon: searchIcon
                })
            } else if (listType === 'notifications'){
                await setInformations({
                    content: texts[1],
                    link: '/',
                    // icon: notificationIcon
                })
            } else if(listType === 'games'){
                await setInformations({
                    content: texts[2],
                    link: '/',
                    // icon: gameListIcon
                })
            }
        }
        fetchData()
        setIsLoading(false)
    }, [])

    return(
        !isLoading &&
        <EmptyComponent>
            {informations.icon && (
                <figure className="icon_container">
                    <Image style={{ objectFit: "fill" }} alt="icone de pesquisa" src={informations.icon} />
                </figure>
            )}
            {text && (
                <p className="description">
                    {informations.content}
                </p>
            )}
            {button && (
                <Link href={'/'} className="button">
                    voltar para a home
                </Link>
            )}
        </EmptyComponent>
    )
}