import styled from "styled-components";

export const TrailersContainerSection = styled.div`
    
    .desktop {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 16px;
        padding: 16px;
        width: fit-content;
    }

    .mobile {
        display: none;
    }

    @media (max-width: 920px){
        .main_title {
            border: 1px solid red;
        }

        .desktop {
            display: none;
        }
        .mobile {
            display: flex;
            margin-left: 20px;

            h1 {
                margin-left: 0;
            }
        }

        .desktop_title {
            display: none;
        }
    }
`;