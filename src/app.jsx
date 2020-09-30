import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Layout from './Layouts/Layout'
export default function app() {
    return (
        <>
            <GlobalStyle />
            <Layout />
        </>
    );
}
