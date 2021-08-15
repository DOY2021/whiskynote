import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import { client } from '../../api/client';
import { profileAPI } from '../../api/profile';
import { useUserDispatch } from '../../hook/useUserContext';
import CSRFToken from '../../shared/CSRFToken';

function SocialLogin() {

  useEffect(() =>{
    GetProfile()
  }, []);

  const dispatch = useUserDispatch();
  const history = useHistory();
  const [cookie, setCookie] = useCookies();

  async function GetProfile() {
    window.location.href.includes('access_token') && GetUser();
    async function GetUser() {
      const location = window.location.href.split('=')[1];
      const loca = location.split('&')[0];
      const header = {
        Authorization: `${loca}`,
      };
     
      interface SoicalLoginProp{
        access_token: string;
        user_id: number;
      }
  
      const response : SoicalLoginProp = await client.get('/api/login/naver/', {
        headers: header,
      })
      console.log(response);
      try {
        if (!dispatch) return;
        const profile = await profileAPI.getProfile(response.user_id);
        console.log(profile);
        dispatch({
          type: 'LOGIN',
          payload: {
            user_id: response.user_id,
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
            user_id: response.user_id,
            isLoggedIn: true,
            nickname: null,
            bio: null,
            profile_photo: null,
          },
        });
        setCookie('user_id', JSON.stringify(response.user_id), { maxAge: 1209600 }); //2weeks
        history.push('/signup/register_profile');
      }

        
      // .then(res => {
      //   localStorage.setItem('wtw-token', res.token);
      //   console.log(res);
      // });
    }
  }

  return (
    <CSRFToken />
  )
}

export default SocialLogin