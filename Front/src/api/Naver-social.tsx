import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;

export default function NaverLogin() {
  const [data, setData] = useState();

  useEffect(CDM, []);

  function CDM() {
    Naver();
    GetProfile();
  }
  function Naver() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: `_7_cSSycFzLB4MC8INUt`,
      callbackUrl: 'http://localhost:3000/signin/',
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: 40,
      },
    });
    naverLogin.init();
  }
  return <div id="naverIdLogin" />;
}

function GetProfile() {
  window.location.href.includes('access_token') && GetUser();
  function GetUser() {
    const location = window.location.href.split('=')[1];
    const loca = location.split('&')[0];
    const header = {
      Authorization: `Bearer ${loca}`,
    };

    fetch('https://openapi.naver.com/v1/nid/me', {
      method: 'get',
      headers: header,
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('wtw-token', res.token);
        console.log(res);
      });
  }
}
