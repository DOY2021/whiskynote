import React from 'react';
import { Link } from 'react-router-dom';
import KakaoLogin from '../../../api/KakaoLogin';
import NaverLogin from '../../../api/Naver-social';
import Button from '../../../shared/Button/Button';
import S from './TypeChoice.styled';

function TypeChoice() {
  return (
    <S.TypeChoiceWrapper>
      <S.TypeChoiceTemplate>
        <S.TypeChoiceHeader>
          <S.TypeChoiceHeaderH1>회원가입</S.TypeChoiceHeaderH1>
        </S.TypeChoiceHeader>
        <div>
          <NaverLogin />
          <KakaoLogin></KakaoLogin>
        </div>
        <Link to="/signup/email">
          <Button size="login" variant="primary">
            이메일로 회원가입
          </Button>
        </Link>
        <Link to="/">
          <Button size="small" variant="primary" type="text">
            이미 계정이 있으신가요?
          </Button>
        </Link>
      </S.TypeChoiceTemplate>
    </S.TypeChoiceWrapper>
  );
}

export default TypeChoice;
