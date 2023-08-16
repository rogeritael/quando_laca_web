import styled from "styled-components";

export const GameListContainer = styled.article`
    color: #fff;
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 14px;
    margin-bottom: 24px;
    padding: 14px;
    /* padding-bottom: 14px; */
    border-bottom: 1px solid var(--bg-secondary);
    
    img {
        width: 65px;
        height: 95px;
    }

    .infos {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: baseline;
        margin-top: 20px;

        h2 {
            font-size: 14px;
        }

        p {
            font-size: 12px;
        }

        span {
            font-size: 12px;
            color: var(--highlight);
        }
    }


    .buttons {
        margin-left: auto;

        button {
            font-weight: bold;
            font-size: 16px;
            color: #fff;
            background-color: var(--bg-secondary);
            border-radius: 4px;
            padding: 11px;
            cursor: pointer;
        
            &:last-child {
                padding: 12px 80px;
                margin-left: 8px;
            }
        }
    }
`;