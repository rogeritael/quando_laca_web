import styled from "styled-components";

export const GameComponent = styled.article`
    max-width: 150px;
    color: #fff;

    figure {
        width: 150px;
        height: 220px;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 14px;
        position: relative;
        transition: 500ms;
        pointer-events: none;
        background-color: var(--bg-secondary);

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            inset: 0;
            background-color: #fff;
            opacity: 0.1;
            display: none;
        }
    }

    .about {
        display: flex;
        flex-direction: column;
        gap: 8px;

        ul li {
            display: inline-block;
            font-size: 10px;
            color: var(--highlight);
            margin-right: 4px;
            
            &::after {
                content: '•';
                margin-left: 4px;
            }

            &:last-child {
                margin-right: 0;
                &::after {
                    content: '';
                }
            }
        }

        h1 {
            font-size: 14px;
            font-weight: normal;
        }

        span {
            font-size: 10px;
            padding: 3px 6px;
            border-radius: 10px;
            width: fit-content;
            background-color: var(--highlight);
        }
    }

    &:hover {
        figure::after {
            display: block;
        }
    }


    @media(max-width: 768px){
        max-width: 130px;

        figure {
            width: 130px;
            height: 190px;
        }
    }
`;