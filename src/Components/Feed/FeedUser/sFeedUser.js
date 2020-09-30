import styled, { css } from "styled-components";
import { BorderRadius } from "../Bdrs/Bdrs";
import { Float, Heart, SendPlane } from "../../../styles/icons";
const flex = css`
    display: flex;
    align-items: center;
    width: 100%;
`;
const icon = css`
    cursor: pointer;
    fill: transparent;
    & path:nth-child(2) {
        stroke: var(--i1d);
    }
    stroke-width: 1px;
    width: 30px;
    height: 30px;
    color: var(--i1d);
`;
export const Container = styled(BorderRadius)`
    width: 614px;
    margin: 30px 0;
    border: 0;
    @media (min-width: 640px) {
        border: 1px solid var(--e22);
        background-color: var(--white);
    }
`;
export const UserInfo = styled.div`
    border-bottom: 1px solid var(--e22);
    padding: 16px;
    ${flex}
    height: 60px;
`;
export const User = styled.div`
    ${flex}
    justify-content: space-between;
`;
export const WrapperUser = styled.div`
    ${flex}
`;
export const Avatar = styled.div`
    border-radius: 50rem;
    border: 1px solid red;
    flex-shrink: 0;
    height: 42px;
    width: 42px;
`;
export const UserName = styled.div`
    margin-left: 12px;
    a {
        color: var(--id1);
        text-decoration: none;
        font-weight: 500;
        &:hover {
            text-decoration: underline;
        }
    }
`;
export const Readmore = styled.div``;
export const UserImage = styled.div`
    background-color: var(--bb2);
    position: relative;
    height: 614px;
`;

export const Overlay = styled.div`
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const UserDatas = styled.div`
    padding: 16px;
`;
export const Icons = styled.div`
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    & > svg {
        fill: var(--i1d);
    }
`;
export const Comments = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
`;

export const FloatIcon = styled(Float)`
    ${icon}
`;
export const HeartIcon = styled(Heart)`
    ${icon}
`;
export const SendIcon = styled(SendPlane)`
    ${icon}
`;
export const LikeFor = styled.div`
    display: flex;
    align-items: center;
    & > span{
        line-height: 0;
    }
    & > span strong {
        font-weight: 500;
    }
`;
export const LikeAvatar = styled.div`
    margin-right: 7px;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background-color: var(--f52);
`;
