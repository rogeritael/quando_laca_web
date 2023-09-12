import styled, { keyframes } from "styled-components";

interface SliderProps {
    maxWidth: string;
}

const entry = keyframes`
    from {
        margin-left: 400px;
        opacity: 0;
    }
`

export const SliderContainer = styled.div<SliderProps>`
    animation: ${entry} 1000ms ease-in-out;
    max-width: calc(100vw - 94px);
    
    .carousel_header {
        display: flex;
        align-items: center;
        padding: 14px 0;

        h2 {
            font-size: 18px;
            font-weight: normal;
        }

        .controllers {
            margin-left: auto;
            display: flex;
            gap: 20px;

            img {
                cursor: pointer;
                display: inline;

                &:first-child {
                    transform: rotate(180deg);
                }
            }
        }
    }

    .carousel {
        display: flex;
        max-width: ${props => props.maxWidth};
        overflow-x: scroll;
        position: relative;
        margin-top: 20px;

        &::-webkit-scrollbar {
            height: 0;
        }

        .rail {
            width: fit-content;
            display: flex;
            gap: 20px;
            transition: 500ms;
        }

        /* &::before {
            content: '';
            width: 80px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(270deg, rgba(9, 8, 15, 0.00) 0%, #09080F 100%);
            z-index: 2;
            pointer-events: none;
        }
        
        &::after {
            content: '';
            width: 80px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(270deg, rgba(9, 8, 15, 0.00) 0%, #09080F 100%);
            z-index: 2;
            pointer-events: none;
        } */
    }

    @media (max-width: 800px){
        max-width: calc(100vw);
    }

    @media (max-width: 425px){
        .controllers {
            img {
                display: none;
            }
        }
    }
`;