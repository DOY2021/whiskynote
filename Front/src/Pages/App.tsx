import React, { useCallback, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Feature/Header/Header';

import SignIn from '../Feature/SignIn/SignIn';

import SignUpPage from './SignUpPage';
import Landing from '../Feature/Landing/Landing';
import MyPage from '../Feature/MyPage/MyPage';
import { useCookies } from 'react-cookie';
import { profileAPI } from '../api/profile';
import { useUserDispatch, useUserState } from '../hook/useUserContext';
import RegisterWhisky from '../Feature/RegisterWhisky/RegisterWhisky';
import Explore from '../Feature/Explore/Explore';
import DB from '../Feature/WhiskyDB/DB';
import SocialLogin from '../Feature/SignIn/SocialLogin';
import AfterRegister from '../Feature/RegisterWhisky/AfterRegister/AfterRegister';
import NewWhiskyReview from '../Feature/Review/NewWhiskyReview/NewWhiskyReview';
import NotFoundPage from './NotFoundPage';
import WhiteSpace from '../shared/WhiteSpace/WhiteSpace';

function App() {
  const [cookies] = useCookies(['user_id']);

  const dispatch = useUserDispatch();

  const user = useUserState();

  const fetchProfile = useCallback(async () => {
    if (!dispatch) return;
    if (!cookies) return;
    console.log(user);
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
    <>
      <Header />
      <Switch>
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/mypage" exact component={MyPage} />
        <Route path="/" exact component={Landing} />
        <Route path="/registerWhisky" exact component={RegisterWhisky} />
        <Route path="/afterRegister" exact component={AfterRegister} />
        <Route path="/explore/:order_by/:category" exact component={Explore} />
        <Route path="/socialLogin" exact component={SocialLogin} />
        <Route path="/firstRegister/:name" exact component={AfterRegister} />
        <Route path="/whiskyDB/:id" exact component={DB} />
        <Route path="/newWhiskyReview/:id" exact component={NewWhiskyReview} />
        <Route component={NotFoundPage} />
        {/* <Redirect to="/"/> */}
      </Switch>
      {/* //TODO Footer */}
      <WhiteSpace height='300'/>
    </>
  );
}

export default App;
