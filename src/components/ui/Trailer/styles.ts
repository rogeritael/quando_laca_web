import styled, { keyframes } from "styled-components";

const entry = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const player = keyframes`
    from {
        opacity: 0;
        scale: 1.2;
    }
`;

interface TrailerProps {
    animationDelay: number;
}

export const TrailerComponent = styled.article<TrailerProps>`
    width: 255px;
    height: 155px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    opacity: 0;
    animation: ${entry} 1000ms ease-in-out forwards;
    animation-delay: ${props => `${props.animationDelay}ms`};

    img {
        width: 100%;
        height: 100%;
        transition: 300ms;
    }

    .player_icon {
        width: 24px;
        height: 24px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: 300ms;
        animation: ${player} 1000ms ease-in-out;
    }

    &:hover {
        img {
            filter: blur(0.90px);
        }

        .player_icon {
            scale: 1.2;
            filter: none;
        }
    }
`