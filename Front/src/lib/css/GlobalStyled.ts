import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;

        background-color: #EDECE6;
        margin:0;
        padding: 0;
        min-height: 100vh;
        min-width: 1200px;
        width: 100%;
    }
    #root {
    }
    html {
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

        padding: 0;
    }
`;
