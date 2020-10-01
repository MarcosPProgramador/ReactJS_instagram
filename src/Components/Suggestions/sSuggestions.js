import styled, { css } from "styled-components";

const flex = css`
    display: flex;
    align-items: center;
`;
const bet = css`
    justify-content: space-between;
`;

export const Container = styled.div`
    width: 293px;
    top: 120px;
    right: 230px;
    position: fixed;
    @media(max-width: 1379px){
        display: none;
    }
`;
export const UserData = styled.div`
    display: flex;
`;
export const UserAvatar = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50rem;
    background-color: var(--bb2);
    border: 1px solid var(--e22);
`;
export const UserWrapper = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const UserName = styled.div`
    font-weight: 500;
    margin-bottom: 3px;
`;
export const UserFull = styled.div`
    color: var(--f52);
    font-size: 13px;
`;
export const Data = styled.div`
    ${flex}
    ${bet}
    margin-top: 20px;
    span {
        font-size: 15px;
        color: var(--f52);
        font-weight: 500;
    }
`;

export const Users = styled.div`
    display: flex;
    flex-direction: column;
`;
export const About = styled.div`
    margin-top: 25px;
`;
export const AboutList = styled.ul`
    list-style: none;
`;
export const AboutTab = styled.li`
    display: inline-flex;
    position: relative;
    font-size: 12px;
    padding-right: 7px;
    padding-left: 3px;
    &:nth-last-child(1n + 2)::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        background-color: var(--e12);
        height: 3px;
        width: 3px;
        border-radius: 50%;
    }
`;
export const AboutLink = styled.a`
    cursor: pointer;
    color: var(--e12);
`;
export const AboutInst = styled.div`
    margin-top: 20px;
    font-size: 12px;
    color: var(--e12);
`;
