import styled from "styled-components";

export const MobileHeaderContainer = styled.header`
    width: 100%;
    padding: 40px 20px 20px 20px;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    display: none;

    .search {
        margin-left: auto;
        margin-right: 14px;
        cursor: pointer;
    }

    .bell {
        margin-bottom: -14px;
    }

    @media (max-width: 800px){
        display: flex;
    }
`;