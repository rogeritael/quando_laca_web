import styled from "styled-components";

export const OptionComponent = styled.button`
    background-color: transparent;
    border: 1px solid var(--highlight);
    /* padding: 24px; */
    height: 64px;
    width: 100%;
    max-width: 620px;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
        background-color: var(--bg-secondary);
    }
    
    a {
        color:var(--highlight);
        display: inline-block;
        width: 100%;
        height: 100%;
        display: grid;
        place-content: center;
    }
`