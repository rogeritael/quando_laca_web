import styled from "styled-components";

export const LogoComponent = styled.p`
    font-size: 0.875;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 8px;

    span {
        font-weight: bold;
    }

    @media (max-width: 800px){
        font-size: 14px;
    }
`;