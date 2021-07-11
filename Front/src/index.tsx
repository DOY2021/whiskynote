import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Pages/App';

import axios from 'axios';
import { UserContextProvider } from './hook/useUserContext';
import { CookiesProvider } from 'react-cookie';
import { GlobalStyle } from './lib/css/GlobalStyled';

render(
  <BrowserRouter>
    <CookiesProvider>
      <UserContextProvider>
        <GlobalStyle />
        <App />
      </UserContextProvider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
