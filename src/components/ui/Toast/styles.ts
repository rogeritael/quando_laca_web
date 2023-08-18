import styled, { keyframes } from "styled-components";
import css from "styled-jsx/css";

const entry = keyframes`
    0% {
        opacity: 0;
        margin-bottom: -20px;
    }
    100% {
        opacity: 1;
        margin-bottom: 0;
    }
`

const leave = keyframes`
    0% {
        opacity: 1;
        margin-bottom: 0;
    }
    100% {
        opacity: 0;
        margin-bottom: -20px;
    }
`


const barAnimation = keyframes`
    0% {
        width: 100%;
    }
    100% {
        width: 0;
    }
`

interface ToastProps {
    isVisible: boolean;
}

export const ToastComponent = styled.div<ToastProps>`
    padding: 8px;
    max-width: 300px;
    width: 100%;
    color: #fff;
    background-color: #3F3F3F;
    position: absolute;
    z-index: 3;
    border-radius: 4px;
    bottom: 24px;
    left: 2%;
    display: ${(props) => props.isVisible ? 'block' : 'none' };
    animation: ${entry} 300ms, ${leave} 300ms 2700ms;


    h3 {
        font-size: 12px;
        margin-bottom: 4px;
    }

    p {
        font-size: 10px;
        margin-left: 8px;
        margin-bottom: 4px;

        span {
            font-weight: bold;
        }
    }

    .progress_bar {
        width: 100%;
        height: 4px;
        border-radius: 4px;
        display: inline-block;
        background-color: #252525;
        position: relative;

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: #fff;
            border-radius: 4px;
            animation: ${barAnimation} 3000ms 300ms;
        }
    }
`;