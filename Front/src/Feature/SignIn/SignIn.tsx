import React, { useState } from 'react';

import { authAPI } from '../../api/auth';
import Button from '../../shared/Button/Button';
import S from './SignIn.styled';
import SignInput from '../../shared/Input/SignInput/SignInput';
import { Link } from 'react-router-dom';
import useSignInErr from './useSignInErr';
import NaverLogin from '../../api/Naver-social';

function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmail(value);
  };
  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPassword(value);
  };

  const [loading, setLoading] = useState(false);

  const { errMsg, setLoginErr } = useSignInErr();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    console.log(email, password);
    const response = await authAPI.postLogin({ email, password });
    console.log(response);

    if (response.type === 'success') {
      //TODO: redirect to landing page
    } else {
      //No Key for errors
      setLoginErr('Unable to log in with provided credentials.');
    }
    setLoading(false);
  };

  return (
    <S.SignInWrapper>
      <S.SignInTemplate>
        <S.SignInHeader>
          <S.SignInHeaderH1>로그인</S.SignInHeaderH1>
        </S.SignInHeader>
        <S.SignInForm onSubmit={handleLoginSubmit}>
          <SignInput
            inputLabel=""
            hasError={errMsg.non_field_errors !== null}
            isValidated={false}
            value={email}
            name="email"
            onChange={handleEmailInput}
            placeholder="imtexter@gmail.com"
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
            placeholder="비밀번호를 입력해주세요"
            signType="signin"
            errorMsg={errMsg.non_field_errors}
          />
          <NaverLogin />
          <S.SignInBtnContainer>
            <Link to="/signup">
              <Button size="small" variant="primary" type="text">
                회원가입
              </Button>
            </Link>
            {/* TODO: add link for forgot ID/PW */}
            <Link to="/">
              <Button size="small" variant="grayscale" type="text">
                아이디/비밀번호 찾기
              </Button>
            </Link>
            <Button
              size="medium"
              variant="secondary"
              disabled={loading || !password || !email}
            >
              로그인
            </Button>
          </S.SignInBtnContainer>
        </S.SignInForm>
      </S.SignInTemplate>
    </S.SignInWrapper>
  );
}

export default SignIn;
