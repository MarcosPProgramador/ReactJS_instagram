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
        /* --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px; */
        --jb7: rgb(0,0,0);
        --i1d: rgb(38,38,38);
        --j64: rgb(54,54,54);
        --f52: rgb(142,142,142);
        --ba8: rgb(168,168,168);
        --e12: rgb(190,190,190);
        --e22: rgb(230,230,230);
        --bb2: rgb(239,239,239);
        --b3f: rgb(250,250,250);
        --fa7: rgb(224,241,255);
        --fe0: rgb(0,55,107);
        --d69: rgb(0,149,246);
        --jbb: rgb(53,121,234);
        --b86: rgb(88,195,34);
        --i30: rgb(237,73,86);

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
    html,body, #root{

        min-width: 260px;
        height: 100%;
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
