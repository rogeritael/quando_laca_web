import styled, { keyframes } from "styled-components";

const buttonEntry = keyframes`
    from {
        opacity: 0;
        margin-bottom: -20px;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`
const entry = keyframes`
    from {
        filter: blur(2px);
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        top: 24px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
`;

const slideLeft = keyframes`
    from {
        opacity: 0;
        left: -48px;
    }
    to {
        opacity: 1;
        left: 0;
    }
`;

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
    }

    .back_page {
        display: none;
        /* color: var(--highlight); */
        /* margin-bottom: 14px; */
        /* align-items: center; */
        animation: ${entry} 300ms;

        img {
            width: 24px;
            height: 24px;
            transform: rotate(180deg);
            margin-right: 8px;
        }
    }

    //=====================================
    .background_image {
        width: 100%;
        /* min-height: 100vh; */
        height: 100vh;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .image_mask {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.00) 100%);
        }
    }

    .game_infos {
        position: absolute;
        top: 0;
        left: 48px;
        padding-bottom: 400px;
        height: 100vh;
        animation: ${entry} 1000ms ease-in-out;
        width: 100%;
        padding-top: 48px;

        .developer {
            display: none;
        }

        .info_list, .description {
            margin-top: 30px;
        }

        .title {
            font-size: 48px;
            width: 100%;
            position: relative;
            animation: ${slideLeft} 1000ms ease-in-out;
        }

        .info_list {
            display: flex;
            gap: 20px;
            position: relative;
            animation: ${slideUp} 1000ms ease-in-out;
        }

        .categories {
            span {
                &::after {
                    content: ', ';
                }

                &:last-child {
                    &::after {
                        content: '';
                    }
                }
            }
        }

        .description {
            max-width: 600px;
            overflow-y: auto;
            max-height: 150px;
            padding-bottom: 24px;
            position: relative;
            opacity: 0;
            animation: ${slideUp} 1000ms 500ms ease-in-out forwards;
        }

        .buttons_container {
            position: relative;
            margin-top: 24px;
            opacity: 0;
            animation: ${buttonEntry} 1500ms 1000ms ease-in-out forwards;

            button, a {
                font-size: 14px;
                padding: 20px 32px;
                /* border-radius: 6px; */
                border-radius: 42px;
                cursor: pointer;
                font-weight: bold;
                background-color: transparent;
                color: #fff;
            }

            a {
                font-weight: normal;
                position: relative;
                text-align: center;

                &::after {
                    content: '';
                    width: 80%;
                    height: 2px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 0;
                    background-color: #fff;
                    margin: 0 auto;
                    opacity: 0;
                    transition: 300ms;
                }

                &:hover {
                    opacity: 0.9;
                }
            }

            button {
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

    .image_galery {
        display: flex;
        gap: 16px;
        position: absolute;
        bottom: 24px;
        padding-left: 40px;
        right: 50px;

        figure {
            width: 270px;
            height: 150px;
            overflow: hidden;
            cursor: pointer;
            margin-top: 14px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                background-color: var(--bg-secondary);
            }
        
            .player {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                width: 32px;
                height: 32px;
                object-fit: contain;
                pointer-events: none;
                background-color: transparent;
            }
        }
    
        
    }

    @media (max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
        "main";
        height: 100%;
        /* "side"; */

        .back_page {
            display: flex;
        }

        .side {
            display: none;
        }

        .game_section {
            .background_image .image_mask {
                background-color: var(--bg);
                opacity: 0.6;
            }

            .game_infos {
                left: 0;
                top: 14px;
                padding: 0 20px;
                max-height: 200vh;

                .developer {
                    text-transform: uppercase;
                    margin: 14px 36px;
                    display: block;
                }

                .title_container {
                    display: flex;
                    align-items: baseline;
                }

                .description {
                    max-width: 600px;
                    max-height: 150px;
                    padding-bottom: 24px;
                    position: relative;
                    opacity: 0;
                    animation: ${slideUp} 1000ms 500ms ease-in-out forwards;
                }

                .info_list {
                    /* flex-direction: column; */
                    /* justify-content: space-between; */

                    p {
                        position: relative;

                        &:nth-child(1){
                            display: none;
                        }

                        &::after {
                            content: '';
                            /* width: 14px; */
                            /* height: 2px; */
                            /* background-color: #fff; */
                            position: absolute;
                            left: 0;
                            bottom: -4px;
                        }
                    }
                }

                .buttons_container {
                    button {
                        font-size: 12px;
                        padding: 16px 24px;
                    }
                }

                .title {
                    font-size: 32px;
                }

                .info_list {
                    font-size: 12px;

                    p {
                        width: max-content;
                    }
                }

                p {
                    font-size: 14px;
                }
            }
        }

        .image_galery {
            /* margin-top: auto; */
            right: 0;
        }
    }
`;