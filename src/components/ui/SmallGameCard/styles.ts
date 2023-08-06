import styled from "styled-components";
import clock from '@/assets/icons/clock.svg'

export const CardContainer = styled.article`
    background-color: var(--bg-secondary);
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    max-width: 270px;
    border-radius: 12px;

    figure {
        width: 46px;
        height: 56px;
        border-radius: 8px;
        overflow: hidden;

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
    }
`;