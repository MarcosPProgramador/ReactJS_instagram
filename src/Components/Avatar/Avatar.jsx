import styled from "styled-components";
export const AvatarCircle = styled.div`
    border-radius: 50%;
    position: relative;
    z-index: 2;
    &::after {
        z-index: 0;
        content: "";
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        position: absolute;
        border-radius: 50%;
        background-image: linear-gradient(-135deg, #b955d8, #ffe66d);
    }
    &::before {
        border: 2px solid var(--white);

        z-index: 1;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        border-radius: 50%;
    }
`;


