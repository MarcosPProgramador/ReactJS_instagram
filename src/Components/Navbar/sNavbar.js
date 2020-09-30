import styled from "styled-components";
import { Centralize } from "../Centralize/Centralize";
export const Container = styled.div`
    height: 54px;
    padding: 0 20px;


    background-color: var(--white);
    border-bottom: 1px solid var(--e22);
    width: 100%;
    min-width: 260px;
    top: 0;
    left: 0;
    z-index: 3;
    position: fixed;
`;
export const Wrapper = styled(Centralize)`
    align-items: center;
    justify-content: space-between;
    display: flex;
    height: 100%;
`;
