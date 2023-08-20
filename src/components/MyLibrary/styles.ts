import styled from "styled-components";

export const LibraryComponent = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        color: #fff;
        font-weight: normal;
        margin-bottom: 20px;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        gap: 8px;

        p {
            color: var(--highlight);
            font-size: 0.75rem;
            text-align: center;
        }
    }
    

    .games_container {
        display: flex;
        gap: 14px;
        flex-direction: column;
    }
`;