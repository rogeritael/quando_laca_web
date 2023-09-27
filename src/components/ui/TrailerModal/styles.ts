import styled, { keyframes } from "styled-components";

interface ModalProps {
    isOpen: boolean;
}

const scale = keyframes`
    0%{
        opacity: 0;
        scale: 0.8;
    }
    100% {
        opacity: 1;
        scale: 1;
    }
`

const fade = keyframes`
    from {
        opacity: 0;
    }
`

export const ModalContainer = styled.section<ModalProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    display: ${props => props.isOpen ? 'grid' : 'none'};
    place-items: center;
    z-index: 4;
    animation: ${fade} 200ms;

    .header {
        z-index: 7;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 24px;

        img {
            cursor: pointer;
        }

    }

    .background {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        background-color: var(--bg);
        opacity: 1;
    }

    iframe {
        z-index: 3;
        max-width: 60vw;
        width: 100%;
        aspect-ratio: 16/9;
        position: relative;
        top: -44px;
    }

    .show_hide {
        position: absolute;
        z-index: 8;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        padding: 10px 24px;
        background-color: var(--bg-secondary);
        border-radius: 24px;
        font-size: 14px;
        transition: 500ms;

        svg {
            transition: 200ms;
            aspect-ratio: 1/1;
        }
    }

    .related {
        position: fixed;
        left: 80px;
        z-index: 7;
        width: calc(100% - 80px);
        background-color: var(--bg-secondary);
        padding: 10px;
        height: 140px;
        overflow-x: scroll;
        transition: 500ms;

        &::-webkit-scrollbar {
            height: 4px;
        }

        &::-webkit-scrollbar-track {
            background: var(--bg-secondary);
        }

        &::-webkit-scrollbar-thumb {
            background-color: #fff;
            border-radius: 20px;
        }

        .rail {
            width: fit-content;
            height: 100%;
            display: flex;
            gap: 14px;
            

            .related_video {
                height: 120px;
                aspect-ratio: 16/9;
                border-radius: 8px;
                overflow: hidden;
                cursor: pointer;
                
                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    @media(max-width: 800px){
        .related {
            left: 0;
            width: calc(100%);
        }
    }

    @media(max-width: 768px){
        iframe {
            max-width: 100vw;
            width: 100%;
        }
    }
`