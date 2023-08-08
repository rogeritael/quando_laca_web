import styled from "styled-components";

export const PageContainer = styled.section`
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-areas:
        "side main";

    .side {
        grid-area: side;
        width: 80px;
        position: fixed;
        top: 0;
        left: 0;
    }

    .game_section {
        grid-area: main;

        .header, .logo_container {
            display: flex;
            align-items: center;
            padding: 16px;
        }

        .logo_container {
            gap: 8px;
        }

        .header {
            justify-content: space-between;
        }
    }


`;