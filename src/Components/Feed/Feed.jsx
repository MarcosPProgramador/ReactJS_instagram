import React from "react";
import { Container, Feeds } from "./sFeed";
import FeedUser from "./FeedUser/FeedUser";
import Status from "./Status/Status";
const Feed = () => {
    return (
        <Container>
            <Feeds>
                <Status />
                <FeedUser />
                <FeedUser />
                <FeedUser />
            </Feeds>
        </Container>
    );
};

export default Feed;
