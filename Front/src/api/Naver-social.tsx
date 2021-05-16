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
    // GetProfile();
  }
  function Naver() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: `_7_cSSycFzLB4MC8INUt`,
      callbackUrl: 'http://localhost:3000',
      isPopup: true,
      loginButton: {
        color: 'green',
        type: 3,
        height: 50,
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
      Authorization: loca,
    };

    fetch('https://10.58.2.227:8000/user/naver_auth', {
      method: 'get',
      headers: header,
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('wtw-token', res.token);
      });
  }
}
