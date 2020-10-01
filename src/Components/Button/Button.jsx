import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: ${(props) => (props.black ? "var(--jb7)" : "var(--d69)")};

    font-weight: 500;
    font-size: 13px;
    padding: 5px 10px;
`;
