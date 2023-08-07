import styled from "styled-components";

export const TitleComponent = styled.h1`
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 1rem;
    margin: 0 16px;

    .controllers {
        display: flex;
        gap: 24px;
        margin-right: -16px;

        img {
            cursor: pointer;

            &:first-child {
                transform: rotate(180deg);
            }
        }
    }

    a {
        font-size: 0.75rem;
        text-decoration: none;
        color: var(--highlight);
    }
`;