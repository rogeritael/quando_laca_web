import styled, { keyframes } from "styled-components";

const entry = keyframes`
    0% {
        opacity: 0;
        right: 14px;
    }
    100% {
        opacity: 1;
        right: 24px;
    }
`

interface DeleteButtonProps {
    isVisible: boolean;
}

export const ButtonComponent = styled.button<DeleteButtonProps>`
    position: absolute;
    right: 24px;
    display: ${(props) => props.isVisible ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 12px 14px;
    border-radius: 24px;
    background-color: #fff;
    z-index: 2;
    cursor: pointer;
    box-shadow: 12px -1px 24px 0px rgba(255, 255, 255, 0.13);

    animation: ${entry} 200ms;
`;