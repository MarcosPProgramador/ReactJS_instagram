import React from "react";
import styled from "styled-components";
import { Search as SearchIcon } from "../../../styles/icons";

const Container = styled.div`
    position: relative;
    & input {
        width: min(400px, 30vw);
        height: 30px;
        padding: 6px 20px 6px 30px;
        border: 0;
        border-bottom: 1px solid var(--i1d);
        box-shadow: 0 1px 1px var(--e22);
    }
    @media (max-width: 768px) {
        display: none;
    }
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 30px;
    justify-content: center;
    position: absolute;

    & svg {
        pointer-events: none;
    }
`;

const IconSearch = styled(SearchIcon)`
    width: 25px;
    height: 25px;
    transition: 500ms ease;
    &.adfcs {
        width: 17px;
        height: 17px;
    }
`;
const Search = () => {
    const cls = "adfcs";
    const obj = {
        handleFocus() {
            const fcs = o("fcs");
            fcs.classList.add(cls);
        },
        handleBlur() {
            const fcs = o("fcs");
            fcs.classList.remove(cls);
        },
    };

    const o = (el) => document.getElementById(el);
    
    return (
        <Container>
            <Wrapper>
                <IconSearch id="fcs" />
            </Wrapper>
            <input
                name=""
                onFocus={obj.handleFocus}
                onBlur={obj.handleBlur}
                placeholder="Pesquisar"
                id="place"
                type="text"
            />
        </Container>
    );
};

export default Search;
