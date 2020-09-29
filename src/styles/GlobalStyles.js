import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    :root{
        --blue: #007bff;
        --light-blue:  #b4dcff;
        --indigo: #6610f2;
        --purple: #6f42c1;
        --pink: #e83e8c;
        --red: #dc3545;
        --orange: #fd7e14;
        --yellow: #ffc107;
        --green: #28a745;
        --teal: #20c997;
        --cyan: #17a2b8;
        --light: #f8f9fa;
        --white: #fff;
        --gray: #6c757d;
        --dark: #343a40;
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        appearance: none;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        user-select:none;

    }
    *::-webkit-scrollbar{
        width: 7px;
        height: 7px;

    }
    *::-webkit-scrollbar-thumb{
        background-color: var(--dark);
        border-radius: 50rem;
    }
    *{
        scrollbar-color: var(--dark) var(--white);
        scrollbar-width: thin;

    }
    html,body{

        min-width: 260px;
        min-height: 100vh;

    }
    body{        
        overflow-x: hidden;
        background-color: var(--white);
    }
    .cp{
        cursor: pointer;
    }
`;
