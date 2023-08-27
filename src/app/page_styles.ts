import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {
        opacity: 1;
        scale: 1;
    }
    100% {
        opacity: 0;
        scale: 2;
    }
`;

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

                .bell_container {
                    position: relative;
                    .bell {
                        cursor: pointer;
                    }

                    .pulsing_alert, .pulsing_alert_pulse {
                        width: 12px;
                        height: 12px;
                        background-color: var(--highlight);
                        position: absolute;
                        right: 0;
                        top: 0;
                        border-radius: 50%;
                        border: 2px solid var(--bg);
                    }

                    .pulsing_alert_pulse {
                        border: none;
                        animation: ${pulse} 1500ms infinite;
                    }
                }
                
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