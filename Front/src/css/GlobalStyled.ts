import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Work+Sans:wght@400;500;700&display=swap');
        font-family: 'Noto Sans KR','Work Sans', sans-serif;
        margin:0;
        padding: 0;
        min-height: 100%;
    }
    #root {
        min-height: 100vh;
    }
    html {
        height: 100%:
    }
    div{
        box-sizing: border-box;
    }
    button {
        font-family: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    input,button, input:focus {
        outline: none;
        
        border: none;
        box-sizing: border-box;
    }
`;
