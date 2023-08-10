import styled from "styled-components";

interface ConfirmModalProps {
    isVisible: boolean;
}

export const ModalContainer = styled.div<ConfirmModalProps>`
    background-color: var(--bg-secondary);
    padding: 24px 36px;
    color: #fff;
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    border-radius: 16px;
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.50);
    display: ${(props) => props.isVisible ? 'block' : 'none'};

    h2, p {
        max-width: 300px;
    }

    h2 {
        font-size: 16px;
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

    .buttons {
        display: flex;
        justify-content: end;
        gap: 8px;

        button {
            padding: 8px 14px;
            border-radius: 4px;
            background-color: #DC3545;
            color: #fff;
            cursor: pointer;

            &:first-child {
                background-color: transparent;
                color: var(--highlight);
            }
        }
    }
`;