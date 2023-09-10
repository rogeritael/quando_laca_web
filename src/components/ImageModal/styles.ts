import styled from "styled-components";

export const ImageModalContainer = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    
    .background {
        width: 100%;
        height: 100%;
        position: absolute;
        display: inline-block;
        inset: 0;
        background-color: var(--bg);
        /* background-color: #fff; */
    }

    svg {
        position: absolute;
        top: 24px;
        right: 24px;
        font-size: 32px;
        cursor: pointer;
        stroke: 1;
    }

    .image_container {
        width: 100%;
        max-width: 85vw;
        height: 100vh;
        position: relative;
        margin: 0 auto;

        img {
            position: relative;
            margin: auto 0;
        }
    }

    @media(max-width: 768px){
        .image_container {
            max-width: 100vw;
            height: 80vh;
        }
    }
`;