import styled, { keyframes } from "styled-components";

const entryAnimation = keyframes`
    0% {
        top: -125px;
        opacity: 0;
    }
    100% {
        top: 0;
        opacity: 1;
    }
`;

const fade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.3;
    }
`;

interface ConfirmModalProps {
    isConfirmModalVisible: boolean;
}

export const ModalContainer = styled.div<ConfirmModalProps>`
    width: 100vw;
    height: 100vh;
    position: relative;
    position: absolute;
    inset: 0;
    display: ${(props) => props.isConfirmModalVisible ? 'block' : 'none'};
    z-index: 4;

    .modal {
        background-color: var(--bg-secondary);
        color: #fff;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.50);
        
        width: 100vw;
        height: 125px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 100px;
        animation: ${entryAnimation} 200ms ease-in-out;

        h2, p {
            /* max-width: 300px; */
        }

        h2 {
            font-size: 20px;
            font-weight: normal;
            margin-bottom: 16px;
        }

        p {
            font-size: 12px;
            color: var(--highlight);
            margin-bottom: 24px;

            span {
                color: #fff;
            }
        }

        .buttons_container {
            display: flex;
            flex-direction: row;
            gap: 8px;
            align-items: center;

            button {
                border: 2px solid #ffffff80;
                overflow: hidden;
                font-size: 14px;
                padding: 14px 45px;
                border-radius: 28px;
                cursor: pointer;
                font-weight: bold;
                background-color: transparent;
                color: #fff;
                position: relative;
                
                &::before {
                    content: '';
                    max-width: 205px;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background-color: #fff;
                    opacity: 0.1;
                }

                &:hover {
                    &::before {
                        opacity: 0.2;
                    }
                }

                &:first-child {
                    border: none;
                    font-weight: normal;
                    &::before {
                        display: none;
                    }
                }
            }
        }
    }

    .background {
        background-color: var(--bg);
        opacity: 0.5;
        z-index: 2;
        position: absolute;
        inset: 0;
        width: 100vw;
        height: 100vh;
        animation: ${fade} 200ms;
    }

    @media(max-width: 924px){
        .modal {
            flex-direction: column;
            height: fit-content;
        }
    }

    @media(max-width: 600px){
        .modal {
            padding: 24px;
            .text_container {
                text-align: center;
                h2 {
                    font-size: 18px;
                }
            }

            .buttons_container {
                button {
                    /* font-size: 12px; */
                    padding: 12px 38px;
                }
            }
        }
    }
`;