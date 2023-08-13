import styled from "styled-components";

interface ModalProps {
    isOpen: boolean;
}

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
    }
`