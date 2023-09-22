import styled from "styled-components";

export const LibraryContainer = styled.section`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-areas:
    "side main";
    position: relative;

    .side {
        grid-area: side;
    }

    .main {
        grid-area: main;
    }

    .header_container, .logo_container {
        display: flex;
    }

    .header_container {
        width: 100%;
        justify-content: space-between;
    }

    .logo_container {
        margin-right: 44px;
        margin-top: 38px;
    }

    .page_title {
        color: #fff;
        margin: 0 auto;
        text-align: center;
        font-weight: normal;
        margin-top: 40px;
        animation: none;
    }

    .games_container {
        width: 100%;
    }

    .category_list_mobile {
        display: none;
    }

    @media (max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 80px;
        grid-template-areas:
        "main"
        "side";

        .header_container {
            display: none;
        }

        .page_title {
            font-size: 20px;
            color: var(--highlight);
        }

        .category_list_mobile {
            display: flex;
        }

        .games_container {
            margin-bottom: 60px;
        }
    }

    @media(max-width: 425px){
        .page_title {
            font-size: 16px;
        }
    }
`;