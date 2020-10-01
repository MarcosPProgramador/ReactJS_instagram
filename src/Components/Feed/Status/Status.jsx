import React from "react";
import styled from "styled-components";
import { BorderRadius } from "../Bdrs/Bdrs";

const Container = styled(BorderRadius)`
    margin-top: 38px;
    @media (max-width: 640px) {
        margin: 2px 0;
    }
    background-color: var(--white);
    height: 118px;
    display: flex;
    align-items: center;
    overflow: auto;
`;
const Box = styled.div`
    display: flex;
    align-items: center;
    height: 84px;
    padding: 0 10px;
`;
const User = styled.div`
    text-align: center;
`;
const UserCircle = styled.div`
    margin: 0 13px;
    height: 66px;
    width: 66px;
    border-radius: 50%;
    border: 1px solid red;
`;
const UserName = styled.div`
    margin-top: 6px;
    font-size: 13px;
`;
const Status = () => {
    const api = [
        {
            id: 0,
            img: "#",
            username: "||marcos_a",
        },
        {
            id: 1,
            img: "#",
            username: "pedrinho_s",
        },
        {
            id: 2,
            img: "#",
            username: "colosso_senior",
        },
        {
            id: 3,
            img: "#",
            username: "salve_salve",
        },
    ];
    return (
        <Container>
            <Box>
                {api.map((api) => {
                    return (
                        <User>
                            <UserCircle />
                            <UserName>{api.username}</UserName>
                        </User>
                    );
                })}
            </Box>
        </Container>
    );
};

export default Status;
