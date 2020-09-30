import React from "react";
import {
    Container,
    HomeIcon,
    SendPlaneIcon,
    SendIcon,
    CompassIcon,
    HeartIcon,
} from "./sRouteIcons";
const RouteIcons = () => {
    function addAndRemove({ target }) {
        remove("icon");
        add("fill", target);
    }

    const remove = (el) => {
        const e = document.getElementsByClassName(el);
        for (const iterator of e) {
            iterator.classList.remove("fill");
        }
    };
    const add = (el, tg) => {
        [...tg.children].map((e) => {
            e.classList.add(el);
        });
    };

    return (
        <Container>
            <a href="#" onClick={addAndRemove}>
                <HomeIcon className="icon fill" />
            </a>
            <a href="#" onClick={addAndRemove}>
                <SendPlaneIcon className="icon" />
            </a>
            <a href="#" onClick={addAndRemove}>
                <CompassIcon className="icon" />
            </a>
            <a href="#" onClick={addAndRemove}>
                <HeartIcon className="icon" />
            </a>
        </Container>
    );
};

export default RouteIcons;
