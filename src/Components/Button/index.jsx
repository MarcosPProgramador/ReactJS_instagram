import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) =>
        props.outlined ? "var(--light)" : "var(--dark)"};
    border: 2px solid
        ${(props) => (props.outlined ? "var(--dark)" : "transparent")};
    color: ${(props) => (props.outlined ? "var(--dark)" : "var(--light)")};

    font-weight: bold;
    padding: 5px 10px;

    transition: 500ms ease;
    transition-property: background-color, color;
    

    :hover {
        background-color: ${(props) =>
            props.outlined ? "var(--dark)" : "var(--light)"};
        color: ${(props) => (props.outlined ? "var(--light)" : "var(--dark)")};
    }
`;
