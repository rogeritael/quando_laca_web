import styled from "styled-components";

export const PageContainer = styled.section`

    .main_content {
        height: 100vh;
        display: grid;
        grid-template-columns: 80px 1fr 1fr 300px;
        grid-template-rows: 90px 1fr;
        grid-template-areas:
        "side main main library";

        aside {
            width: 80px;
            grid-area: side;
            position: fixed;
            top: 0;
            left: 0;
        }

        .library {
            grid-area: library;
            border-left: 1px solid var(--bg-secondary);
            padding: 20px;
            padding-top: 0;
            height: 100vh;
            position: fixed;
            top: 0;
            right: 16px;

            .logo_container {
                margin-left: auto;
                display: flex;
                justify-content: center;
                gap: 8px;
                padding: 38px 0;
                margin-bottom: 38px;
            }
        }

        .main {
            /* background-color: blue; */
            grid-area: main;
            transition: filter 0.3s ease;
            
            .featured {
                margin-top: 50px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }
`;