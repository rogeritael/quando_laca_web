import styled from "styled-components";

export const EmptyComponent = styled.figure`
    color: var(--highlight);
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    margin-top: 48px;

    .icon_container {
        width: 60px;
        height: 60px;

        img {
            width: 100%;
            height: 100%;
            opacity: 0.6;
        }
    }

    .description {
        max-width: 400px;
        text-align: center;
        margin: 14px;
        margin-bottom: 24px;
        font-weight: 300;
    }

    .button {
        font-size: 12px;
        border-bottom: 1px solid #fff;
        color: #fff;
        font-weight: 200;
    }
`