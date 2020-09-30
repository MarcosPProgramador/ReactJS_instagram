import styled, { css } from "styled-components";
import {
    Home,
    SendPlane,
    Send,
    Compass,
    CompassFill,
    Heart,
    PersonCircle,
} from "../../../styles/icons";
export const Container = styled.div`
    display: flex;
`;
const sty = css`
    width: 26px;
    height: 26px;
    color: var(--i1d);
    margin: 0 10px;
`;
const fill = css`
    stroke: var(--i1d);
    fill: var(--i1d);
`;
export const HomeIcon = styled(Home)`
    stroke-width: 5px;
    stroke: black;

    fill: transparent;
    &.fill {
        ${fill}
    }
    ${sty}
`;
export const SendIcon = styled(Send)`
    ${sty}
`;
export const SendPlaneIcon = styled(SendPlane)`
    ${sty}
`;
export const CompassIcon = styled(Compass)`
    ${sty}
`;
export const CompassFillIcon = styled(CompassFill)`
    ${sty}
`;
export const HeartIcon = styled(Heart)`
    &.fill {
        ${fill}
    }

    ${sty}
`;
export const PersonIcon = styled(PersonCircle)`
    fill: var(--e22);
    ${sty}
`;
