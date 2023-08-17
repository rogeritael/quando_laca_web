import styled from "styled-components";

export const GaleryContainer = styled.div`
    display: flex;
    gap: 20px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .main_image {
        max-width: 820px;
        height: 460px;

        
    }

    .mini_images_container {
        display: flex;
        flex-direction: column;
        gap: 20px;

        figure {
            width: 211px;
            height: 118px;
        }
    }

`