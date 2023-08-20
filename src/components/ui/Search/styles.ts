import styled from "styled-components";

export const SearchComponent = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    input {
        background-color: var(--bg-secondary); //--bg-seconday
        padding: 18px 16px;
        padding-left: 56px;
        border-radius: 8px;
        color: #768192; //--highlight-color
        font-size: 0.875rem;
        width: 350px;
        transition: 200ms;

        &:hover, &:focus {
            background-color: var(--bg-secondary-lighten);
        }

        &::placeholder {
            font-size: 0.875rem;
            color: #768192
        }
    }

    img {
        position: absolute;
        left: 16px;
    }
`;