import styled, { keyframes } from "styled-components";

interface ModalProps {
    isOpen: boolean;
}

const fade = keyframes`
    0%{
        opacity: 0;
        scale: 0.8;
    }
    100% {
        opacity: 1;
        scale: 1;
    }
`

export const ModalContainer = styled.section<ModalProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    display: ${props => props.isOpen ? 'grid' : 'none'};
    place-items: center;
    z-index: 1;

    .background {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        background-color: var(--bg);
        opacity: .8;
    }

    iframe {
        z-index: 2;
        animation: ${fade} 400ms;
    }
`