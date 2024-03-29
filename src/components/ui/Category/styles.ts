import styled from "styled-components";

export const CategoryComponent = styled.button`
    padding: 8px 20px;
    font-size: 0.625;
    color: var(--highlight);
    border-radius: 16px;
    height: fit-content;
    width: max-content;
    cursor: pointer;
    transition: 200ms;
    background-color: #ffffff10;
    
    &:hover {
        background-color: #ffffff20;
    }

    @media (max-width: 800px){
        font-size: 12px;
    }
`;