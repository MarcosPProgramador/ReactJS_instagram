import React from "react";
import styled from "styled-components";

const LogoSize = styled.div`
    width: 103px;
    height: 29px;
    display: flex;
`;
const Link = styled.a`
    display: inline-block;
    text-decoration: none;
`
const Breadlogo = () => {
    return (
        <LogoSize>
            <Link href="#">
                <img src="./img/logo.png" alt=""/>
            </Link>
        </LogoSize>
    );
};

export default Breadlogo;
