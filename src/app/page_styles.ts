import styled from "styled-components";

export const PageContainer = styled.section`
    height: 100vh;
    /* padding: 20px; */

    .main_content {
        min-height: 100vh;
        display: grid;
        grid-template-columns: 80px 1fr 1fr 300px;
        grid-template-rows: 90px 1fr;
        grid-template-areas:
        "side main main library";

        .library {
            grid-area: library;
            border-left: 1px solid var(--bg-secondary);
            padding: 20px;
            padding-top: 0;
            height: 100vh;
            position: fixed;
            top: 0;
            right: 16px;
            width: 280px;

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
            grid-area: main;
            transition: filter 0.3s ease;
            
            .featured {
                margin-top: 50px;
                display: flex;
                padding-right: 20px;
            }
        }
    }

    .category_list_mobile {
        display: none;
    }

    @media (max-width: 1200px){
        .main_content {
            grid-template-columns: 80px 1fr;
            grid-template-areas:
            "side main";
            
            .library {
                display: none;
            }
    
        }
    }

    @media (max-width: 920px){
        .main {
            .featured {
                flex-direction: column;
                
                .popular_box {
                    margin-top: 40px;
                }
                
            }
        }
    }

    @media (max-width: 800px){

        .header {
            display: none;
        }

        .main_content {
            grid-template-columns: 1fr;

            .main {
                .phantom_space {
                    margin-top: 20px;
                    width: 100%;
                    height: 40px;
                    display: inline-block;
                }
            }
            
            .library {
                display: none;
            }
    
        }

        .category_list_mobile {
            display: flex;
        }
    }
`;