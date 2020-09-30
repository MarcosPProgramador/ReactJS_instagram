import React from "react";
import styled from "styled-components";

const LogoSize = styled.div`
    width: 103px;
    height: 29px;
    display: flex;
`;
const Link = styled.a`
    display: flex;
    align-items: center;

    text-decoration: none;
    &:active {
        opacity: 0.5;
    }
    img {
        @media (max-width:576px) {
            width: min( max(18vw, 72px), 103px);
            height: min( max(5vw, 20px), 29px);
        }
    }
`;
const Breadlogo = () => {
    return (
        <LogoSize>
            <Link href="/">
                <img src="./img/logo.png" alt="" />
            </Link>
        </LogoSize>
    );
};

export default Breadlogo;
