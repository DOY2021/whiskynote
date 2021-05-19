import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Pages/App';
import { GlobalStyle } from './css/GlobalStyled';
import axios from 'axios';
import { UserContextProvider } from './hook/useUserContext';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

render(
  <BrowserRouter>
    <GlobalStyle />
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
