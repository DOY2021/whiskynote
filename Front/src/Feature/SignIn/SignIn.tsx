import React, { useEffect, useState } from 'react';

import { authAPI } from '../../api/auth';
import Button from '../../shared/Button/Button';
import S from './SignIn.styled';
import SignInput from '../../shared/Input/SignInput/SignInput';
import { Link } from 'react-router-dom';
import useSignInErr from './useSignInErr';
import NaverLogin from '../../api/Naver-social';
import KakaoLogin from '../../api/KakaoLogin';
import KakaoMap from '../Map/KakaoMap';
import { useCookies } from 'react-cookie';

function SignIn() {
  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [cookies, setCookie, removeCookie] = useCookies(['user_id']);

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmail(value);
  };
  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPassword(value);
  };

  const [checked, setChecked] = useState<boolean>(true);

  const [loading, setLoading] = useState(false);

  const { errMsg, setLoginErr } = useSignInErr();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const response = await authAPI.postLogin({ email, password });
    console.log(response.data.key);

    if (response.type === 'success') {
      //TODO: redirect to landing page
      if(checked){
        setCookie('user_id', response.data.user_id, {maxAge:1209600}); //2weeks
      }else {
        removeCookie('user_id');
      }
    } else {
      //No Key for errors
      setLoginErr('Unable to log in with provided credentials.');
    }
    setLoading(false);
  };

  return (
    <S.SignInWrapper>

      {/* <KakaoMap></KakaoMap> */}

      <S.SignInTemplate>
        <S.SignInHeader>
          <S.SignInHeaderH1>로그인</S.SignInHeaderH1>
        </S.SignInHeader>
        <S.SocialLoginWrapper>
          <NaverLogin />
          <KakaoLogin></KakaoLogin>
          </S.SocialLoginWrapper>
        <S.Line></S.Line>
        <S.SignInForm onSubmit={handleLoginSubmit}>
          <SignInput
            inputLabel=""
            hasError={errMsg.non_field_errors !== null}
            isValidated={false}
            value={email}
            name="email"
            onChange={handleEmailInput}
            placeholder="이메일"
            signType="signin"
            errorMsg={errMsg.non_field_errors}
          />
          <SignInput
            inputLabel=""
            type="password"
            hasError={errMsg.non_field_errors !== null}
            isValidated={false}
            value={password}
            name="password"
            onChange={handlePasswordInput}
            placeholder="비밀번호"
            signType="signin"
            errorMsg={errMsg.non_field_errors}
          />

          <S.SignInBtnContainer>
            <Button
              size="login"
              variant="primary"
              disabled={loading || !password || !email}
            >
              로그인
            </Button>
            <Link to="/signup/type-choice">
              <Button size="login" variant="primary">
                회원가입
              </Button>
            </Link>
            <Link to="/">
              <S.ButtonWrapper>
              <S.CheckBox type="checkbox" onChange={(e) => {
                setChecked(e.target.checked)}} checked={checked}/>
              <S.CheckBoxText onClick={() => setChecked(!checked)}>로그인 상태 유지</S.CheckBoxText>
                <Button size="small" variant="grayscale" type="text">
                  이메일/비밀번호 찾기
                </Button>
              </S.ButtonWrapper>
            </Link>
          </S.SignInBtnContainer>
        </S.SignInForm>
      </S.SignInTemplate>
    </S.SignInWrapper>
  );
}

export default SignIn;

/* TODO: add link for forgot ID/PW */
