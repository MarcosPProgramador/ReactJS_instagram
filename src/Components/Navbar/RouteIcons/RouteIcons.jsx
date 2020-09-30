import React from "react";
import {
    Container,
    HomeIcon,
    SendPlaneIcon,
    SendIcon,
    CompassIcon,
    CompassFillIcon,
    HeartIcon,
    PersonIcon,
} from "./sRouteIcons";
const RouteIcons = () => {
    return (
        <Container>
            <HomeIcon className="fill"/>
            <SendPlaneIcon />
            <SendIcon />
            <CompassFillIcon />
            <CompassIcon />
            <HeartIcon className="fill"/>
            <PersonIcon />
        </Container>
    );
};

export default RouteIcons;
