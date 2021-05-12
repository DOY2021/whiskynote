import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const { Kakao } = window; //for TypeScript
declare global {
  interface Window {
    Kakao: any; 
  }
}
const KakaoLoginBtn = styled.div` {
  margin-top: 10px;
  padding: 0 0 0 20px;
  height: 56px;
  line-height: 60px;
  background-color: #fee500;
  font-size: 12px;
  color: #111;
  display: inline-block;
  width: 184.95px;
  border-radius: 5px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  background-image: url(//upload.wikimedia.org/wikipedia/commons/d/dd/Kakao_Corp._symbol_-_2012.svg);
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 15px;
`;

function KakaoLogin(){
  const history = useHistory();
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function(response){
            history.push('/login');
          },
        },   
        )
      },
      fail: function(err){
        console.log(err)
      }
    })
    
  }

  return(
    <div>
    <KakaoLoginBtn onClick={kakaoLoginClickHandler}>
      카카오 로그인
    </KakaoLoginBtn>
    </div>
  );
  
}

export default KakaoLogin;