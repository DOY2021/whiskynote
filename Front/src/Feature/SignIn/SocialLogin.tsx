import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { client } from '../../api/client';
import { profileAPI } from '../../api/profile';
import { useUserDispatch } from '../../hook/useUserContext';

function SocialLogin() {

  useEffect(() =>{
    GetProfile()
  }, []);

  const dispatch = useUserDispatch();
  const history = useHistory();

  async function GetProfile() {
    window.location.href.includes('access_token') && GetUser();
    async function GetUser() {
      const location = window.location.href.split('=')[1];
      const loca = location.split('&')[0];
      const header = {
        Authorization: `${loca}`,
      };
      console.log(header);
  
      const response = await client.get('/api/login/naver/', {
        headers: header,
      })

      try {
        if (!dispatch) return;
        const profile = await profileAPI.getProfile(response.data.user_id);
        console.log(profile);
        dispatch({
          type: 'LOGIN',
          payload: {
            user_id: response.data.user_id,
            isLoggedIn: true,
            nickname: response.data.nickname ? response.data.nickname : null,
            bio: response.data.bio ? response.data.bio : null,
            profile_photo: response.data.profile_photo
              ? response.data.profile_photo
              : null,
          },
        });
        history.push('/');
      } catch {
        if (!dispatch) return;
        dispatch({
          type: 'LOGIN',
          payload: {
            user_id: response.data.user_id,
            isLoggedIn: true,
            nickname: null,
            bio: null,
            profile_photo: null,
          },
        });
        history.push('signup/register_profile');
      }

        
      // .then(res => {
      //   localStorage.setItem('wtw-token', res.token);
      //   console.log(res);
      // });
    }
  }

  return (
    <div>
    </div>
  )
}

export default SocialLogin