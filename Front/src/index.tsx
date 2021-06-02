import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Pages/App';
import { GlobalStyle } from './css/GlobalStyled';
import axios from 'axios';
import { UserContextProvider } from './hook/useUserContext';
import { CookiesProvider } from 'react-cookie';

render(
  <BrowserRouter>
    <CookiesProvider>
      <GlobalStyle />
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
