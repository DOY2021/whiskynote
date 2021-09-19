import React, { useState } from 'react';

import { authAPI } from '../../api/auth';
import Button from '../../shared/Button/Button';
import S from './SignIn.styled';
import SignInput from '../../shared/Input/SignInput/SignInput';
import { Link, useHistory } from 'react-router-dom';
import useSignInErr from './useSignInErr';
import NaverLogin from '../../api/Naver-social';
import KakaoLogin from '../../api/KakaoLogin';
import { useCookies } from 'react-cookie';
import { profileAPI } from '../../api/profile';
import CSRFToken from '../../shared/CSRFToken';
import { useUserDispatch } from '../../hook/useUserContext';
import Palette from '../../lib/css/Pallete';
import { client } from '../../api/client';

function SignIn() {

  const [email, setEmail] = useState<string>('');
  const history = useHistory();

  const [password, setPassword] = useState<string>('');
  const [cookies, setCookie, removeCookie] = useCookies(['user_id','csrftoken']);

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };
  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const [checked, setChecked] = useState<boolean>(true);

  const [loading, setLoading] = useState(false);

  const { errMsg, setLoginErr } = useSignInErr();

  const dispatch = useUserDispatch();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const response = await authAPI.postLogin({ email, password });

    if (response.type === 'success') {
      //redirect to landing page

      setCookie('token', response.data.token);
      try {
        if (!dispatch) return;
        const profile = await profileAPI.getProfile(response.data.user.pk);
        console.log(profile);
        dispatch({
          type: 'LOGIN',
          payload: {
            user_id: profile.data.user_id,
            isLoggedIn: true,
            nickname: profile.data.nickname ? profile.data.nickname : null,
            bio: profile.data.bio ? profile.data.bio : null,
            profile_photo: profile.data.profile_photo
              ? profile.data.profile_photo
              : null,
          },
        });
        history.push('/');
      } catch {
        if (!dispatch) return;
        dispatch({
          type: 'LOGIN',
          payload: {
            user_id: response.data.user.pk,
            isLoggedIn: true,
            nickname: null,
            bio: null,
            profile_photo: null,
          },
        });
        history.push('signup/register_profile');
      }

      if (checked) {
        setCookie('user_id', response.data.user.pk, { maxAge: 1209600 }); //2weeks
      } else {
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
      <CSRFToken />
      <S.SignInTemplate>
        <S.SignInHeader>
          <S.SignInHeaderH1>로그인</S.SignInHeaderH1>
        </S.SignInHeader>
        {/* <S.SocialLoginWrapper>
          <NaverLogin />
          <KakaoLogin></KakaoLogin>
        </S.SocialLoginWrapper> */}
        <S.Line></S.Line>
        <S.SignInForm onSubmit={handleLoginSubmit}>
          <SignInput
            data_cy="email"
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
            data_cy="password"
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
              data_cy="signin_btn"
              size="login"
              variant="black"
              disabled={loading || !password || !email}
            >
              로그인
            </Button>

            <Button
              data_cy="signup_btn"
              size="login"
              variant="grayscale"
              type="outline"
              border={Palette.Black}
              color={Palette.Black}
            >
              <Link to="/signup/type-choice">회원가입</Link>
            </Button>

            <S.ButtonWrapper>
              <div style={{ display: 'flex'}}>
                <S.CheckBox
                  id="chk"
                  type="checkbox"
                  onChange={e => {
                    setChecked(e.target.checked);
                  }}
                  checked={checked}
                />
                <S.CheckBoxLabel htmlFor="chk"></S.CheckBoxLabel>
                <S.CheckBoxText
                  data-cy="checkbox-txt"
                  onClick={() => setChecked(!checked)}
                >
                  로그인 상태 유지
                </S.CheckBoxText>
              </div>
              <S.findIdPwBtn 
              >
                아이디/비밀번호 찾기
              </S.findIdPwBtn>
            </S.ButtonWrapper>
          </S.SignInBtnContainer>
        </S.SignInForm>
      </S.SignInTemplate>
    </S.SignInWrapper>
  );
}

export default SignIn;

/* TODO: add link for forgot ID/PW */

function getCookie(name) {
  let cookieValue: null | string = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      console.log(cookies)
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
