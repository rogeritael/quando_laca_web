import styled from "styled-components";

export const CategoryListContainer = styled.div`
    position: relative;
    display: flex;
    max-width: 40vw;
    align-items: center;
    padding: 8px;
    overflow: hidden;

    .slider {
        display: flex;
        align-items: center;
        gap: 14px;
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
        }
        
        &::after {
            content: '';
            width: 80px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 20px;
            background: linear-gradient(270deg, rgba(9, 8, 15, 0.00) 0%, #09080F 100%);
        }
    }

    .left-controller {
        left: 0px;            
    }

    .right-controller {
        transform: rotate(180deg);     
        right: 0px;
    }
`;