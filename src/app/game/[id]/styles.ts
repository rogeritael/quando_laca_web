import styled, { keyframes } from "styled-components";

// const buttonEntry = keyframes`
//     from {
//         opacity: 0;
//         margin-bottom: -20px;
//     }
//     to {
//         filter: blur(0);
//         opacity: 1;
//     }
// `
// const entry = keyframes`
//     from {
//         filter: blur(2px);
//         opacity: 0;
//     }
// `;

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
        width: 100%;
        height: 100vh;

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


        

        /* .buttons_container {
            position: relative;
            margin-top: 24px;
            opacity: 0;

            button, a {
                font-size: 14px;
                padding: 20px 32px;
                border-radius: 6px;
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
        } */
    }

    @media(max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
        "main";
        height: 100%;
    }
`;