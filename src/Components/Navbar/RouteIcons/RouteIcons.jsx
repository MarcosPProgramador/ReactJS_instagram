import React from "react";
import {
    Container,
    HomeIcon,
    SendPlaneIcon,
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
        [...tg.children].map((e) => e.classList.add(el));
    };

    return (
        <Container>
            <a href="/" onClick={addAndRemove}>
                <HomeIcon className="icon fill" />
            </a>
            <a href="/send" onClick={addAndRemove}>
                <SendPlaneIcon className="icon" />
            </a>
            <a href="/compass" onClick={addAndRemove}>
                <CompassIcon className="icon" />
            </a>
            <button onClick={addAndRemove}>
                <HeartIcon className="icon" />
            </button>
        </Container>
    );
};

export default RouteIcons;
