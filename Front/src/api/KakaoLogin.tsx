import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { absoluteCenter } from '../lib/css/Mixin';

const { Kakao } = window; //for TypeScript
declare global {
  interface Window {
    Kakao: any;
  }
}
const KakaoLoginBtn = styled.div` 
  width: 320px;
  height: 70px;
  line-height: 40px;
  background-color: #fee500;
  font-size: 20px;
  color: #111;
  display: inline-block;
  
  ${absoluteCenter}

  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  background-image: url(//upload.wikimedia.org/wikipedia/commons/d/dd/Kakao_Corp._symbol_-_2012.svg);
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 15px;
`;

function KakaoLogin() {
  const history = useHistory();
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            history.push('/login');
          },
        });
      },
      fail: function (err) {
        console.log(err);
      },
    });
  };

  return (
    <div>
      <KakaoLoginBtn onClick={kakaoLoginClickHandler}>
        카카오톡으로 로그인
      </KakaoLoginBtn>
    </div>
  );
}

export default KakaoLogin;
