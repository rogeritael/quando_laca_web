import styled, { keyframes } from "styled-components";

export const PageContainer = styled.section`
    color: #fff;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-areas:
        "side main";
    position: relative;
    overflow: hidden;
    

    .game_section {
        grid-area: main;
        position: relative;
        width: 100%;
        height: 100vh;

        .return_icon {
            position: absolute;
            left: 38px;
            height: 80px;
            top: 0;
            z-index: 1;
            width: 24px;
        }

        .background {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .overlay01, .overlay02 {
                width: 100%;
                height: 100%;
                position: absolute;
                inset: 0;
                background: linear-gradient(0deg, rgba(28, 28, 40, 0.80) 0%, rgba(28, 28, 40, 0.00) 77.78%);
            }

            .overlay02 {
                transform: rotate(180deg);
            }

        }



        .content {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            padding: 80px 38px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;

            .player {
                margin: 44px;
                cursor: pointer;
                transition: 300ms;

                &:hover {
                    scale: 1.05;
                }
            }

            .top_infos {
                display: flex;
                flex-direction: column;
                align-items: center;

                .developer {
                    text-transform: uppercase;
                    font-weight: 200;
                    letter-spacing: 8px;
                    width: fit-content;
                }

                h1 {
                    margin-top: 14px;
                    margin-bottom: 32px;
                    font-size: 44px;
                    
                    img {
                        display: none;
                    }
                }

                .group_info {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }
            }
            .bottom_infos {
                .countdown_text {
                    letter-spacing: 4px;
                }

                display: flex;
                flex-direction: column;
                align-items: center;

                .platforms {
                    display: flex;
                    gap: 24px;
                    align-items: center;

                    svg {
                        width: 100%;
                        height: 100%;
                        height: 24px;

                        &.playstation {
                            height: 64px;
                        }
                    }
                }

                .favoriteButton {
                    font-size: 14px;
                    padding: 16px 24px;
                    border-radius: 6px;
                    border-radius: 42px;
                    cursor: pointer;
                    font-weight: bold;
                    background-color: transparent;
                    color: #fff;
                    border: 2px solid #fff;
                    margin-top: 14px;
                    border: 2px solid #fff;
                    overflow: hidden;
                    position: relative;

                    &::before {
                        content: '';
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        inset: 0;
                        background-color: #fff;
                        opacity: 0.1;
                    }

                    &:hover {
                        &::before {
                            opacity: 0.2;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
        "main";
        height: 100%;

        .side {
            border: 1px solid red;
            display: none;
        }

        .game_section {
            .return_icon {
                display: none;
                left: -10px;
                top: -10px;
            }

            .content {
                padding: 38px 24px;
                padding-bottom: 80px;

                .top_infos {
                    align-items: baseline;
                    
                    .developer, .group_info {
                        padding-left: 32px;
                    }

                    h1 {
                        display: flex;
                        gap: 14px;
                        margin-bottom: 16px;

                        img {
                            display: block;
                            position: relative;
                            top: 22px;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 425px){


        .game_section {

            height: 100vh;
            z-index: 3;

            .content {
                padding: 38px 0 38px 24px;
                padding-bottom: 78px;

                .top_infos {
                    h1 {
                        font-size: 28px;

                        img {
                            top: 12px;
                        }
                    }
                }
            }
        }
    }
`;