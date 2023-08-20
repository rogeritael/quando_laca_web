import styled, { keyframes } from "styled-components";


const displayEntry = keyframes`
    from {
        opacity: 0;
        scale: 0.9;
    }
`

export const GaleryModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: 2;
    display: grid;
    place-content: center;

    .background {
        width: 100%;
        height: 100%;
        position: fixed;
        inset: 0;
        background-color: var(--bg);
        z-index: 2;
        opacity: 0.8;
    }

    .galery_container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        z-index: 2;

        .title {
            color: #fff;
            text-align: center;
            margin-bottom: 0px;

            h2 {
                font-weight: normal;
                margin-bottom: 4px;
            }

            span {
                font-size: 14px;
                color: var(--highlight);
            }
        }

        .display {
            max-width: 620px;
            overflow: hidden;
            width: max-content;
            display: flex;
            align-items: center;
            animation: ${displayEntry} 500ms ease-in-out;

            img, iframe {
                width: 620px;
                height: 350px;
                object-fit: cover;

                &.animate {
                    animation: ${displayEntry} 500ms ease-in-out;
                }
            }
            
        }

        .galery_carousel {
            max-width: 620px;
            overflow: hidden;
            display: flex;
            align-items: center;
            position: relative;

            figure {
                width: 40px;
                height: 110%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                background-color: var(--bg);
                opacity: 80%;
                position: absolute;
                right: 0;
                    
                &:first-child {
                    left: 0;
                    transform: rotate(180deg);
                }

                .arrow {
                    object-fit: cover;
                    width: 15px;
                    height: 30px;
                }
            }
            

            .mini_rail {
                width: max-content;
                display: flex;
                align-items: center;
                gap: 16px;

                img, iframe {
                    width: 100px;
                    height: 56px;
                }
            }
        }
    }
`;