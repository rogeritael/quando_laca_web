import styled from 'styled-components'

export const PageContainer = styled.section`
    color: #fff;

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
            height: 100vh;
            position: fixed;
            top: 0;
            right: 16px;

            .logo_container {
                margin-left: auto;
                display: flex;
                justify-content: center;
                gap: 8px;
                margin-top: 18px;
                /* padding: 40px 0; */
                margin-bottom: 68px;
            }
        }

        .main {
            grid-area: main;
            transition: filter 0.3s ease;

            .result_paragraph {
                padding: 16px;
                color: var(--highlight);
            }

            .search_term {
                color: #fff;
                margin-top: 24px;
                margin-left: 16px;
            }
            
            .featured {
                margin-left: 16px;
                margin-top: 50px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }
`;