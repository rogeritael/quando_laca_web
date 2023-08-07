import styled from "styled-components";

export const PopularGamesContainer = styled.div`
    background-color: var(--bg-secondary);
    margin: 16px;
    margin-left: 0;
    border-radius: 16px;
    height: 320px;
    padding: 0 16px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);

    //estilizando os cards dentro do container
    article {
        border-bottom: 1px solid #39404940;
        border-radius: 0;
        padding: 6px 0;

        &:last-child {
            border: none;
        }
    }
`;