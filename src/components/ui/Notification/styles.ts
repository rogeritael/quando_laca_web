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

export const NotificationContainer = styled.div`
    display: flex;
    margin-top: 8px;
    
    .notification_image {
        width: 38px;
        height: 38px;
        margin-right: 8px;
        position: relative;
        
        img {
            border-radius: 50%;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        .alert {
            position: absolute;
            right: 2px;
            top: 0;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #fff;
            z-index: 3;
            display: grid;
            place-items: center;

            .pulse {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #fff;
                position: relative;
                animation: ${pulse} 1500ms infinite;
            }
        }
    }

    .info_container {
        width: 240px;

        .info_box {
            background-color: var(--bg);
            padding: 12px 14px;
            border-radius: 0 8px 8px 8px;
            cursor: pointer;

            &:hover {
                background-color: var(--bg-secondary-lighten);
            }

            h2 {
                font-size: 14px;
                margin-bottom: 8px;
            }

            p {
                font-size: 12px;
                color: var(--highlight);
            }
        }
    }
`