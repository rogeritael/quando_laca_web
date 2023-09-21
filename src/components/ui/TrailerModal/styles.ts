import styled, { keyframes } from "styled-components";

interface ModalProps {
    isOpen: boolean;
}

const scale = keyframes`
    0%{
        opacity: 0;
        scale: 0.8;
    }
    100% {
        opacity: 1;
        scale: 1;
    }
`

const fade = keyframes`
    from {
        opacity: 0;
    }
`

export const ModalContainer = styled.section<ModalProps>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    right: -50%;
    top: 25%;
    display: ${props => props.isOpen ? 'grid' : 'none'};
    place-items: center;
    z-index: 4;
    animation: ${fade} 200ms;

    svg {
        position: absolute;
        top: 24px;
        right: 24px;
        font-size: 32px;
        cursor: pointer;
        stroke: 1;
    }

    .background {
        width: 120%;
        height: 120%;
        position: absolute;
        inset: 0;
        background-color: var(--bg);
        opacity: 1;
    }

    iframe {
        z-index: 3;
        max-width: 60vw;
        width: 100%;
        aspect-ratio: 16/9;
    }

    @media(max-width: 768px){
        iframe {
            max-width: 100vw;
            width: 100%;
        }
    }

    @media(max-width: 425px){
        transform: rotate(90deg);
        transform-origin: center;
        height: 100vw;
        width: 100vh;
        position: absolute;

        iframe {
            aspect-ratio: auto;
            max-width: 100vh;
            width: 90vh;
            max-height: 100vw;
            height: 80vw;
            /* left: -48vw; */
            /* top: 1vh; */
        }
    }
    
`