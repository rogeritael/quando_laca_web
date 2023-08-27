import styled, { keyframes } from "styled-components";

const entry = keyframes`
    from {
        opacity: 0;
        bottom: -24px;
    }
    to {
        opacity: 1;
        bottom: 0;
    }
`;

interface GameProps {
    animationDelay: number;
}

export const GameListContainer = styled.article<GameProps>`
    color: #fff;
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 14px;
    margin-bottom: 24px;
    padding: 14px;
    border-bottom: 1px solid var(--bg-secondary);
    opacity: 0;
    animation: ${entry} 500ms ease-in-out forwards;
    animation-delay: ${props => `${props.animationDelay}ms`};
    position: relative;
    max-width: 100vw;
    /* width: 100%; */
    
    img {
        width: 65px;
        height: 95px;
    }

    .infos {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: baseline;
        margin-top: 20px;

        h2 {
            font-size: 14px;
        }

        p {
            font-size: 12px;
        }

        span {
            font-size: 12px;
            color: var(--highlight);
        }
    }


    .buttons {
        margin-left: auto;
        display: flex;
        align-items: center;

        button {
            font-weight: bold;
            font-size: 16px;
            color: #fff;
            background-color: var(--bg-secondary);
            border-radius: 4px;
            padding: 11px;
            cursor: pointer;
            position: relative;
        
            &:last-child {
                padding: 12px 80px;
                margin-left: 8px;
            }

            &::after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                inset: 0;
                background-color: #fff;
                opacity: 0.02;
                display: none;
            }

            &:hover {
                &::after {
                    display: block;
                }
            }
        }
    }

    @media (max-width: 800px){
        .buttons {
            display: none;
        }
    }
`;