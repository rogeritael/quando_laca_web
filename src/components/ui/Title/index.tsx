import Image from "next/image";
import { TitleComponent } from "./styles";
import arrow from '@/assets/icons/arrow.svg'

interface TitleProps {
    content: string;
    controllers?: boolean;
    disableLink?: boolean;
    onNext?: () => void;
    onPrev?: () => void;
}
export function Title({ content, controllers, disableLink, onNext, onPrev } : TitleProps){
    return(
        <TitleComponent>
            {content}

            {controllers ?
                <div className="controllers">
                    <Image onClick={onNext} src={arrow} alt="avançar carrossel de jogos" />
                    <Image onClick={onPrev} src={arrow} alt="voltar carrossel de jogos" />
                </div>
            :
                !disableLink && (<a href="">ver mais</a>)
            }
        </TitleComponent>
    )
}