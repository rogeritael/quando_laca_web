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

export const BellContainer = styled.figure`
    position: relative;
    
    .bell {
        cursor: pointer;
    }

    .pulsing_alert, .pulsing_alert_pulse {
        width: 12px;
        height: 12px;
        background-color: var(--highlight);
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 50%;
        border: 2px solid var(--bg);
        pointer-events: none;
    }

    .pulsing_alert_pulse {
        border: none;
        animation: ${pulse} 1500ms infinite;
    }

`;