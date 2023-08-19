import styled from "styled-components";

export const SliderContainer = styled.div`

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
        max-width: 800px;
        overflow: hidden;
        position: relative;
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
`;