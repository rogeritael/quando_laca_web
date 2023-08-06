import { Title } from "../ui/Title";
import { Trailer } from "../ui/Trailer";
import { TrailersContainerSection } from "./styles";

interface TrailersContainerProps {

}
export function TrailersContainer(props : TrailersContainerProps){
    return(
        <div>
            <Title />
            <TrailersContainerSection>
                <Trailer />
                <Trailer />
                <Trailer />
                <Trailer />
            </TrailersContainerSection>
        </div>
    )
}