import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
`;

export const NotificationsContainer = styled.div`
    .background {
        width: 100vw;
        height: 100vh;
        position: absolute;
        inset: 0;
        z-index: 1;
    }

    .notification_box {
        position: absolute;
        right: 24px;
        top: 80px;
        z-index: 1;
        width: 320px;
        padding: 0 14px 24px 14px;
        background-color: #11121B;
        color: #fff;
        border-radius: 14px 0 14px 14px;
        height: 400px;
        overflow-y: scroll;
        -webkit-box-shadow: 0px 0px 43px 5px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 43px 5px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 43px 5px rgba(0,0,0,0.75);
        overflow-x: auto;
        animation: ${fadeIn} 150ms;

        &::-webkit-scrollbar {
            width: 4px;
            margin-left: -4px;
            display: none;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: var(--highlight);
            border-radius: 20px;
            height: 36px;
        }

        &:hover {
            &::-webkit-scrollbar {
                display: block;
            }
        }


        .notifications_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            background-color: var(--bg-secondary);
            padding-top: 24px;
            padding-bottom: 14px;
            z-index: 4; //Z-INDEX

            .title {
                font-size: 14px;
                font-weight: normal;
            }

            .new_notifications {
                padding: 6px;
                background-color: var(--highlight);
                border-radius: 50%;
                border: 2px solid var(--bg-secondary);
                font-size: 14px;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background-color: var(--bg);
                    left: -40%;
                    z-index: -1;
                    top: 50%;
                    transform: translateY(-50%);
                }

            }
        }

        .notifications_box {
            display: flex;
            flex-direction: column;

            .date {
                padding-bottom: 24px;
                padding-top: 40px;
                font-size: 12px;
                color: var(--highlight);
                font-weight: bold;
                margin: 0 auto;

                &:first-child {
                    padding-top: 24px;
                }
            }
        }
    }


    @media(max-width: 425px){
        .notification_box {
            width: 100%;
            height: 100%;
            z-index: 4;
            inset: 0;
        }
    }
`