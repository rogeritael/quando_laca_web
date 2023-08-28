import { Carousel } from "../ui/Carousel";
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
        <div style={{ width: "100%" }}>
            <TrailersContainerSection>
                <Title content="Últimos Trailers" url="/Search?term=ultimos_trailers" className="desktop_title"/>
                <div className="desktop">
                    {trailers.map((trailer, index) => (
                        <Trailer animationDelay={index === 0 ? 0 : index * 200} key={index} cover={trailer.cover} videoUrl={trailer.video_url} setTrailerUrl={setTrailerUrl} setIsModalOpen={setIsModalOpen}  />
                    ))}
                </div>
                <div className="mobile">
                    { trailers.length > 0 && 
                        <Carousel maxWidth="100%" title="Últimos trailers">
                            {trailers.map((result, index) => (
                                <Trailer animationDelay={0} videoUrl={result.video_url} setIsModalOpen={setIsModalOpen} setTrailerUrl={setTrailerUrl} cover={result.cover} key={index}/>
                            ))}
                        </Carousel>
                    }
                </div>
            </TrailersContainerSection>
        </div>
    )
}