import styled from "styled-components";

export const TrailersContainer = styled.section`
    padding: 40px 20px;
    color: #fff;

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        position: relative;
        margin-bottom: 34px;

        img {
            position: absolute;
            width: 24px;
            left: 0;
        }
    }
    .main_trailer {
        margin-bottom: 60px;
        iframe {
            width: 100%;
            aspect-ratio: 16/9;
        }

        h2 {
            margin-top: 16px;
            font-size: 20px;
            font-weight: normal;
        }
    }

    .trailers_section {
        max-height: 35vh;
        overflow: scroll;

        .rail {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding-bottom: 20px;

            .mini_trailer {
                display: flex;
                gap: 12px;
                color: #fff;

                figure {
                    width: 120px;
                    aspect-ratio: 16/9;
                    background-color: var(--bg-secondary);

                    img {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    }
                }


                .infos {
                    p {
                        max-width: 200px;
                        max-height: 100px;
                    }

                    span {
                        color: var(--highlight);
                        margin-top: 8px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
    
`