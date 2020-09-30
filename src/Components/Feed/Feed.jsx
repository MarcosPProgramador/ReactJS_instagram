import React from "react";
import { Container, Feeds } from "./sFeed";
import FeedUser from "./FeedUser/FeedUser";
const Feed = () => {
    return (
        <Container>
            {/* <Status /> */}

            <Feeds>
                <FeedUser />
                <FeedUser />
                <FeedUser />
            </Feeds>
        </Container>
    );
};

export default Feed;
