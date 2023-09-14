import styled from "styled-components";

export const EmptyComponent = styled.figure`
    color: var(--highlight);
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    margin-top: 24px;

    .icon_container {
        width: 80px;
        height: 80px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .description {
        max-width: 400px;
        text-align: center;
        margin: 14px;
        margin-bottom: 24px;
    }

    .button {
        height: 40px;
        width: 160px;
        display: grid;
        place-content: center;
        font-size: 14px;
        background-color: var(--highlight);
        color: #fff;
        border-radius: 24px;
        line-height: 40px;
    }
`