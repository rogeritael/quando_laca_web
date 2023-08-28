import styled from 'styled-components'

export const PageContainer = styled.section`
    color: #fff;

    .main_content {
        display: grid;
        grid-template-columns: 80px 1fr 1fr 300px;
        grid-template-areas:
        "side main main library";

        /* aside {
            width: 80px;
            grid-area: side;
            position: fixed;
            top: 0;
            left: 0;
        } */

        .library {
            grid-area: library;
            width: 270px;
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
                /* margin-right: 16px; */
                
                margin-top: 50px;
                display: flex;
                gap: 14px;
            }
        }

        .category_list_mobile {
            display: none;
        }
    }

    @media (max-width: 1090px){
        width: 100vw;
        .main_content {
            grid-template-columns: 80px 1fr;
            grid-template-areas:
            "side main";

            .main .featured {
                width: calc((100vw - 114px));
                /* width: 100vw; */
            }
        }

        .library {
            display: none;
        }
    }

    @media (max-width: 800px){
        .main_content {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 50px;
            grid-template-areas:
            "main"
            "side";

            .header {
                display: none;
            }
            
            .category_list_mobile {
                display: flex;
            }

            .main .featured {
                width: calc(100vw - 34px);
            }
        }
    }

    @media (max-width: 678px){
        .main_content {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 50px;
            grid-template-areas:
            "main"
            "side";

            .main .featured {
                flex-direction: column;
            }
        }
    }
`;