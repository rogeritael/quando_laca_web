import styled from "styled-components";

export const SideMenuContainer = styled.aside`
    height: 100%;
    border-right: 0.025px solid var(--bg-secondary);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 1;
    background-color: var(--bg);

    width: 80px;
    grid-area: side;
    position: fixed;
    /* top: 0; */
    left: 0;
    
    a {
        padding: 12px;
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;

        &.active {
            background-color: var(--bg-secondary);
            transition: 500ms;
        }
    }

    @media (max-width: 800px){
        flex-direction: row;
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0;
        left: 0;
        border-top: 1px solid var(--bg-secondary);

        a {
            height: 100%;
            align-items: center;
        }
    }
`;