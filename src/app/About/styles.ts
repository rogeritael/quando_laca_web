import styled from "styled-components";

export const PageContainer = styled.section`
    color: #fff;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-areas:
        "side main";
    position: relative;

    .side {
        grid-area: side;
        width: 80px;
        position: fixed;
        top: 0;
        left: 0;
    }

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

        .info_list, .description {
            margin-top: 30px;
        }

        .title {
            font-size: 48px;
        }

        .info_list {
            display: flex;
            gap: 20px;
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
        }

        .buttons_container {
            position: relative;
            margin-top: 48px;

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

            img, iframe {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;