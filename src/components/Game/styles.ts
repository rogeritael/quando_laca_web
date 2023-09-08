import styled from "styled-components";

export const GameComponent = styled.article`
    max-width: 190px;
    color: #fff;

    figure {
        width: 190px;
        height: 280px;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 14px;
        position: relative;
        transition: 500ms;
        pointer-events: none;

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
            font-size: 0.875;
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
`;