import styled from "styled-components";

export const LibraryContainer = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-areas:
    "side main";

    .side {
        grid-area: side;
    }

    .main {
        grid-area: main;
    }
`;