import styled from "styled-components";
import css from "styled-jsx/css";

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
            width: 90%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: #fff;
            border-radius: 4px;
        }
    }
`;