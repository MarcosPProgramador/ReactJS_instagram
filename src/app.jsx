import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Button } from "./Components/Button/index";
export default function app() {
    return (
        <>
            <Button className="cp">Olá</Button>
            <GlobalStyle />
        </>
    );
}
