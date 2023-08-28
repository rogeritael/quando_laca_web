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

    .game_section {
        grid-area: main;
        position: relative;
    }

    //=====================================
    .background_image {
        width: 100%;
        height: 100vh;
        position: relative;

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
        top: 48px;
        left: 48px;
        padding-bottom: 400px;
        max-height: calc(100vh - 300px);
        animation: ${entry} 1000ms ease-in-out;

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
            /* color: var(--bg-secn); */
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
            margin-top: 48px;
            opacity: 0;
            animation: ${buttonEntry} 1500ms 1000ms ease-in-out forwards;

            button, a {
                font-size: 14px;
                padding: 20px 45px;
                border-radius: 6px;
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
        right: 0;

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
            }
        }
    
        
    }

    @media (max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 50px;
        grid-template-areas:
        "main"
        "side";

        .game_infos {
            left: 0;
            top: 14px;
            padding: 0 20px;

            .title {
                font-size: 32px;
            }

            .info_list {
                font-size: 12px;
                border: 1px solid red;

                p {
                    width: max-content;
                }
            }

            p {
                font-size: 14px;
            }
        }
    }
`;