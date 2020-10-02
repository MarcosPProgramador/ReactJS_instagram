import styled, { css } from "styled-components";
import React from "react";
import { Button } from "../../Button/Button";
import { AvatarCircle } from "../../Avatar/Avatar";
const flex = css`
    display: flex;
    align-items: center;
`;
const bet = css`
    justify-content: space-between;
`;
export const SugesUser = styled.div`
    ${flex}
    ${bet}
`;
export const SugesWrapper = styled.div`
    margin-top: 10px;
    ${flex}
`;
export const SugesAvatar = styled(AvatarCircle)`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid red;
    margin-right: 8px;
`;
export const SugesNameYou = styled.div``;
export const SugesName = styled.div`
    font-weight: 500;
    font-size: 14px;
`;
export const SugesYou = styled.div`
    color: var(--f52);
    font-size: 12px;
`;

const User = () => {
    return (
        <SugesUser>
            <SugesWrapper>
                <SugesAvatar />
                <SugesNameYou>
                    <SugesName>username</SugesName>
                    <SugesYou>Sugestões para você</SugesYou>
                </SugesNameYou>
            </SugesWrapper>
            <Button>Seguir</Button>
        </SugesUser>
    );
};

export default User;
