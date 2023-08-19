import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0%{
        /* scale: 0.95; */
        opacity: 0;
    }
    100% {
        /* scale: 1; */
        opacity: 1;
    }
`

export const LoadingContianer = styled.section`
    width: 100vw;
    height: 100vh;
    position: absolute;
    inset: 0;
    z-index: 4;
    background-color: var(--bg);
    opacity: 0.8;
    display: grid;
    place-content: center;
    color: #fff;

    h1 {
        animation: ${pulse} 1300ms infinite alternate ease-in-out;
    }

    span {
        font-weight: normal;
    }
`;