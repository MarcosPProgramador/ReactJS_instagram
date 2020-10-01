import React from "react";
import { Container, Wrapper } from "./sLayout";
import Navbar from "../Components/Navbar/Navbar";
import Feed from "../Components/Feed/Feed";
import Suggestions from "../Components/Suggestions/Suggestions";
const Layout = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Feed />
                <Suggestions />
            </Wrapper>
        </Container>
    );
};

export default Layout;
