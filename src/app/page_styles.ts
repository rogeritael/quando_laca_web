import styled from "styled-components";

export const PageContainer = styled.section`
    

    .main_content {
        height: 100vh;
        display: grid;
        grid-template-columns: 80px 1fr 1fr 350px;
        grid-template-rows: 90px 1fr;
        grid-template-areas:
        "side main main library";

        .sidemenu {
            grid-area: side;
            background-color: #fff;
        }

        .library {
            grid-area: library;
            background-color: gray;
        }

        .main {
            background-color: blue;
            grid-area: main;
        }
    }
`;