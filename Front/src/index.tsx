import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Pages/App';


import { UserContextProvider } from './hook/useUserContext';
import { CookiesProvider } from 'react-cookie';
import { GlobalStyle } from './lib/css/GlobalStyled';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


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
