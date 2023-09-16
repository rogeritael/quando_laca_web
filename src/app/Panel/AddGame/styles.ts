import styled from "styled-components";

export const AddGameContaier = styled.main`
    color: #fff;
    padding: 40px;

    .back_page {
        display: flex;
        align-items: center;
        gap: 14px;
        color: #fff;
        font-size: 16px;
        padding: 14px;
    }

    form {
        display: flex;
        flex-direction: column;

        input {
            /* max-width: 600px; */
            width: 100%;
            height: 100%;
            height: 400px;
            /* background-color: var(--highlight); */
            /* background-color: #fff; */
            background-color: transparent;
            border: 1px solid var(--highlight);
            color: var(--highlight);
        }

        button {
            max-width: 100%;
            width: 100%;
            margin-top: 24px;
            height: 48px;
            background-color: var(--bg-secondary);
            color: #fff;
            text-transform: uppercase;
        }
    }
`;