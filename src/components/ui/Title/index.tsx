import { TitleComponent } from "./styles";

interface TitleProps {

}
export function Title(props : TitleProps){
    return(
        <TitleComponent>
            Últimos Trailers
            <a href="">ver mais</a>
        </TitleComponent>
    )
}