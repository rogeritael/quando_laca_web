import styled from "styled-components";

export const PageContainer = styled.section`
    

    .main_content {
        height: 100vh;
        display: grid;
        grid-template-columns: 80px 1fr 1fr 300px;
        grid-template-rows: 90px 1fr;
        grid-template-areas:
        "side main main library";

        .sidemenu {
            grid-area: side;
            background-color: #fff;
        }

        .library {
            grid-area: library;
            border-left: 1px solid var(--bg-secondary);
            padding: 20px;
            height: 100vh;
        }

        .main {
            /* background-color: blue; */
            grid-area: main;

        }
    }
`;