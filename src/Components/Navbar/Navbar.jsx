import React from "react";
import { Container, Wrapper } from "./sNavbar";
import Breadlogo from "./BreadLogo/Breadlogo";
import Search from "./Search/Search";
import RouteIcons from "./RouteIcons/RouteIcons";
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Breadlogo />
                <Search />
                <RouteIcons />
            </Wrapper>
        </Container>
    );
};

export default Navbar;
