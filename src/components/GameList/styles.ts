import styled from "styled-components";

export const GameListContainer = styled.section`
    width: 100%;
    margin-top: 40px;

    .carousel {
        position: relative;
        /* overflow: hidden; */

        &::before, &::after {
            content: '';
            width: 80px;
            height: 100%;
            background: linear-gradient(270deg, rgba(9, 8, 15, 0.00) 0%, #09080F 100%);
            position: absolute;
            pointer-events: none;
            z-index: 2;
        }

        &::before {
            left: 0;
            top: 0;
        }

        &::after {
            left: 2000px;
        }

        .rail {
            display: flex;
            padding: 16px;
            width: fit-content;
            gap: 26px;
            transition: 800ms;
        }
    }
`;