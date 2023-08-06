import Image from "next/image";
import { TrailerComponent } from "./styles";
import exemplo from '@/assets/trailer_exemplo.png'

interface TrailerProps {

}
export function Trailer(props : TrailerProps){
    return(
        <TrailerComponent>
            <a href="">
                <Image src={exemplo} alt="trailer do game" />
            </a>
        </TrailerComponent>
    )
}