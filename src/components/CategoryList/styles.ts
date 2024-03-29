import styled, { keyframes } from "styled-components";

const entry = keyframes`
    from {
        opacity: 0;
    }
`

export const CategoryListContainer = styled.div`
    position: relative;
    display: flex;
    /* max-width: 40vw; */
    align-items: center;
    padding: 8px;
    overflow: hidden;
    animation: ${entry} 2000ms ease-in-out;

    .slider {
        width: 100%;
        /* max-width: 1100px; */
        overflow: scroll;
        margin: 0 12px;

        &::-webkit-scrollbar {
            height: 0;
        }

        .rail {
            position: relative;
            transition: 300ms;
            display: flex;
            align-items: center;
            gap: 14px;
            width: fit-content;
        }
    }

    .controller {
        position: absolute;
        background-color: #09080F;
        height: 100%;
        display: grid;
        place-items: center;
        width: 20px;

        img {
            transform: rotate(180deg);
            cursor: pointer;
            background-color: var(--bg);
        }
        
        &::after {
            content: '';
            width: 80px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 20px;
            background: linear-gradient(270deg, rgba(9, 8, 15, 0.00) 0%, #09080F 100%);
            z-index: 2;
            pointer-events: none;
        }
    }

    .left-controller {
        left: 0px;            
    }

    .right-controller {
        transform: rotate(180deg);     
        right: 0px;
    }

    @media(max-width: 1200px){
        width: 100%;
        max-width: 100vw;
    }

    @media (max-width: 800px){
        .slider .rail {
            gap: 8px;
        }
    }

    @media (max-width: 425px){
        .controller {
            img {
                pointer-events: none;
                /* display: none; */
            }
        }
    }
`;