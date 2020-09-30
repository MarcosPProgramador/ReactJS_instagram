import React from "react";
import { Container, Wrapper } from "./sLayout";
import Navbar from "../Components/Navbar/Navbar";
import Feed from "../Components/Feed/Feed";
const Layout = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Feed />
                {/* <Suggestions /> */}
            </Wrapper>
        </Container>
    );
};

export default Layout;
