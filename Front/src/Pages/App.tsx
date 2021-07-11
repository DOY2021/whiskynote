import React, { FC, useCallback, useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Header from '../Feature/Header/Header';

import SignIn from '../Feature/SignIn/SignIn';
import SignUp from '../Feature/SignUp/EmailSignUp/SignUp';
import MailVf from '../Feature/SignUp/MailVerification/MailVf';

import S from './App.styled';
import SignUpPage from './SignUpPage';
import Landing from '../Feature/Landing/Landing';
import MyPage from '../Feature/MyPage/MyPage';
import { useCookies } from 'react-cookie';
import { profileAPI } from '../api/profile';
import { useUserDispatch, useUserState } from '../hook/useUserContext';

function App() {
  const [cookies] = useCookies(['user_id']);

  const dispatch = useUserDispatch();

  const user = useUserState();

  const fetchProfile = useCallback(async () => {
    if (!dispatch) return;
    if (!cookies) return;
    try {
      const profile = await profileAPI.getProfile(cookies['user_id']);
      //로컬환경인 경우 프록시 설정에 따라 주소가 변하는 이슈가 있어서 수정해주는 코드를 썼습니다.
      if (profile['profile_photo'].match('localhost'))
        profile['profile_photo'] = profile['profile_photo'].replace(
          '3000',
          '8000',
        );
      console.log(profile);
      dispatch({
        type: 'LOGIN',
        payload: {
          user_id: profile['id'],
          isLoggedIn: true,
          nickname: profile['nickname'],
          bio: profile['bio'] ? profile['bio'] : null,
          profile_photo: profile['profile_photo']
            ? profile['profile_photo']
            : null,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }, [cookies, dispatch]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <S.AppWrapper>
      <Header />
      <S.AppMainWrapper>
        <Switch>
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </S.AppMainWrapper>
    </S.AppWrapper>
  );
}

export default App;
