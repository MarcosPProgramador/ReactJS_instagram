import React from "react";
import { BorderRadius } from "../Bdrs/Bdrs";
import styled from "styled-components";
import { AvatarCircle } from "../../Avatar/Avatar";
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
const UserCircle = styled(AvatarCircle)`
    margin: 0 13px;
    height: 66px;
    width: 66px;
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
            username: "username",
        },
        {
            id: 1,
            img: "#",
            username: "username",
        },
        {
            id: 2,
            img: "#",
            username: "username",
        },
        {
            id: 3,
            img: "#",
            username: "username",
        },
    ];
    return (
        <Container>
            <Box>
                {api.map((api, i) => {
                    return (
                        <User key={i + 3}>
                            <UserCircle key={i + 2}/>
                            <UserName key={i + 1}>{api.username}</UserName>
                        </User>
                    );
                })}
            </Box>
        </Container>
    );
};

export default Status;
