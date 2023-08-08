import styled from "styled-components";

export const GaleryContainer = styled.div`
    width: fit-content;
    position: relative;
    margin-top: 16px;
    
    .carousel {
        max-width: 900px;
        overflow: hidden;
        padding: 16px;
        
        .rail {
            display: flex;
            width: fit-content;
            gap: 14px;
        }
    
        &::before, &::after {
            content: '';
            width: 80px;
            height: 100%;
            background: linear-gradient(270deg, rgba(9, 8, 15, 0.00) 0%, #09080F 100%);
            position: absolute;
            pointer-events: none;
            z-index: 0;
        }

        &::before {
            left: 0;
            top: 0;
        }

        &::after {
            top: 0;
            right: 0;
            transform: rotate(180deg);
        }
    }
`