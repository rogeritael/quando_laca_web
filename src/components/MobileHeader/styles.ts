import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    to {
        opacity: 0.7;
    }
`

const slidefromTop = keyframes`
    from {
        top: -60px;
    }
`;

export const MobileHeaderContainer = styled.header`
    width: 100%;
    padding: 40px 20px 20px 20px;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    display: none;

    .search {
        margin-left: auto;
        margin-right: 14px;
        cursor: pointer;
    }

    .bell {
        margin-bottom: -14px;
    }

    .search_container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        
        .search_bg {
            width: 100%;
            height: 100%;
            display: inline-block;
            position: fixed;
            inset: 0;
            background-color: var(--bg);
            opacity: 0;
            z-index: 1;
        
            animation: ${fadeIn} 400ms forwards;
        }

        img {
            position: absolute;
            right: 8px;
            top: 18px;
            z-index: 3;
            animation: ${slidefromTop} 500ms forwards;
        }

        input {
            width: 100%;
            height: 60px;
            position: absolute;
            z-index: 2;
            padding: 14px;
            top: 0;
            animation: ${slidefromTop} 500ms forwards;

            background-color: var(--bg-secondary); //--bg-seconday
            color: var(--highlight); //--highlight-color
            font-size: 1rem;
            transition: 200ms;

            &:hover, &:focus {
                background-color: var(--bg-secondary-lighten);
            }

            &::placeholder {
                font-size: 0.875rem;
                color: var(--highlight)
            }
        }

    }

    @media (max-width: 800px){
        display: flex;
    }
`;