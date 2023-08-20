import styled, { keyframes } from "styled-components";
import clock from '@/assets/icons/clock.svg'

interface CardContainerProps {
    v2?: boolean;
}

export const CardContainer = styled.article<CardContainerProps>`
    background-color: var(--bg-secondary);
    padding: ${(props) => props.v2 ? '4px' : '14px 0 14px 14px' };
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    gap: 12px;
    width: 100%;
    max-width: ${(props) => props.v2 ? '100%' : ' 270px' };
    border-radius: 12px;
    transition: 300ms;

    figure {
        height: 56px;
        width: 46px;
        border-radius: 8px;
        overflow: hidden;
        margin-left: ${(props) => props.v2 ? '16px' : '0' };

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .game_info {
        h2 {
            font-size: 14px;
            color: #fff;
            margin-bottom: 8px;
            font-weight: normal;
            max-width: ${(props) => props.v2 ? '100%' : '150px' };;
        }

        p {
            font-size: 10px;
            color: var(--highlight);
            position: relative;
            display: flex;
            gap: 4px;
        }
    }

    .options {
        margin-left: auto;
        height: 40px;
        cursor: pointer;
    }

    &:hover {
        background-color: var(--bg-secondary-lighten);
    }
`;