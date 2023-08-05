import styled from "styled-components";

export const SearchComponent = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    input {
        background-color: #11121B; //--bg-seconday
        padding: 18px 16px;
        padding-left: 56px;
        border-radius: 8px;
        color: #768192; //--highlight-color
        font-size: 0.875rem;
        width: 100%;
        max-width: 290px;


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