import styled from "styled-components";

export const GameHeaderContainer = styled.div`

    .cover {
        height: 320px;
        width: 100%;
        position: relative;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    
        .game_image {
            width: 220px;
            height: 320px;
            border-radius: 8px;
            overflow: hidden;
            position: absolute;
            bottom: -180px;
            left: 16px;
        }
    }

    .info_container {
        color: #fff;
        height: 180px; //tamanho do card
        padding: 16px;
        padding-left: calc(32px + 220px); //largura do card

        display: flex;
        justify-content: space-between;

        .buttons {
            button {
                font-size: 1rem;
                padding: 1rem 3rem;
                border-radius: 8px;

                &:first-child {
                    margin-right: 24px;
                }
            }
        }
    }

`