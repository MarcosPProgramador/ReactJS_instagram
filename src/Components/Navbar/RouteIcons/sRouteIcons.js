import styled, { css } from "styled-components";
import { Home, SendPlane, Compass, Heart } from "../../../styles/icons";
export const Container = styled.div`
    display: flex;
    a,
    button {
        position: relative;
        display: flex;
        align-items: center;
        text-decoration: none;
        a * {
            pointer-events: none;
        }
        &::after {
            content: "";
            z-index: 2;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    button {
        background-color: transparent;
        border: 0;
    }
`;
const sty = css`
    width: 26px;
    height: 26px;
    color: var(--i1d);
    margin: 0 11px;
    fill: transparent;

    &:active {
        opacity: 0.5;
    }
    &.fill {
        fill: var(--i1d);
    }
    @media (max-width: 768px) {
        margin: 0 min(2vw, 11px);
        width: min(max(5vw, 14px), 26px);
        height: min(max(5vw, 14px), 26px);
    }
`;

export const HomeIcon = styled(Home)`
    stroke: var(--i1d);
    stroke-width: 1px;
    ${sty}
`;
export const SendPlaneIcon = styled(SendPlane)`
    & path:nth-child(2) {
        stroke: var(--i1d);
    }

    ${sty}
`;
export const CompassIcon = styled(Compass)`
    stroke-width: 1px;
    & path:nth-child(2) {
        stroke: var(--i1d);
    }

    ${sty}
`;
export const HeartIcon = styled(Heart)`
    ${sty}
`;
