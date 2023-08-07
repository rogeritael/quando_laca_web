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

    a {
        padding: 12px;
        width: 100%;
        display: flex;
        justify-content: center;

        &.active {
            background-color: var(--bg-secondary);
        }
    }
`;