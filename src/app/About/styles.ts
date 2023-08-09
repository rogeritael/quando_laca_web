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

        .info_section {
            display: grid;
            margin-top: 48px;
            grid-template-columns: 2fr 1fr;
            grid-template-areas: "left right";

            .left {
                grid-area: left;
                padding: 16px;
                
                .description {
                    margin-top: 48px;

                    h1 {
                        margin-left: 0;
                    }

                    p {
                        margin-top: 16px;
                        font-size: 14px;
                        line-height: 20px;
                        color: var(--highlight);
                        max-width: 850px;
                    }
                }
                
            }

            .info {
                margin-top: 64px;
                padding: 0 16px;
                grid-area: right;

                h1 {
                    margin-left: 0;
                    margin-bottom: 24px;
                }

                .info_box {
                    li {
                        color: #fff;
                        display: flex;
                        gap: 14px;
                        margin-bottom: 14px;
                        align-items: center;

                        p {
                            color: var(--highlight);
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }


`;