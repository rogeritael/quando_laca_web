import { Title } from "../ui/Title";
import { Trailer } from "../ui/Trailer";
import { TrailerModal } from "../ui/TrailerModal";
import { TrailersContainerSection } from "./styles";

import { trailers } from "@/mocks/trailers";

interface TrailersContainerProps {
    setTrailerUrl: (param: string) => void;
    setIsModalOpen: (param: boolean) => void;
}

export function TrailersContainer({ setTrailerUrl, setIsModalOpen } : TrailersContainerProps){
    return(
        <div>
            <Title content="Últimos Trailers" url="/Search?id=ultimos_trailers"/>
            <TrailersContainerSection>
                {trailers.map((trailer, index) => (
                    <Trailer key={index} cover={trailer.cover} videoUrl={trailer.video_url} setTrailerUrl={setTrailerUrl} setIsModalOpen={setIsModalOpen}  />
                ))}
            </TrailersContainerSection>
        </div>
    )
}