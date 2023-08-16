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

    .header_container, .logo_container {
        display: flex;
        align-items: center;
    }

    .header_container {
        width: 100%;
        justify-content: space-between;
    }

    .logo_container {
        margin-right: 14px;
    }

    /* .back_link {
        margin-left: 20px;
        margin-top: 24px;
        display: flex;
        align-items: center;
        color: var(--highlight);

        img {
            transform: rotate(180deg);
            margin-right: 4px;
            margin-top: 2px;
        }
    } */

    .page_title {
        color: #fff;
        margin: 0 auto;
        text-align: center;
        font-weight: normal;
        margin-top: 40px;
    }
`;