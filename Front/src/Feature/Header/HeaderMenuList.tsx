import React, { useEffect, useRef, useState } from 'react';
import { FaCog, FaRegBell, FaRegUser, FaSignOutAlt } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { authAPI } from '../../api/auth';

import { useCookies } from 'react-cookie';
import { useUserState } from '../../hook/useUserContext';
import S from './HeaderMenuList.styled';
import Palette from '../../lib/css/Pallete';

const userIconStyle = {
  color: Palette.Gray500,
  fontSize: '25',
  marginTop: '5',
};

const IconStyle = { fontSize: '20px', color: `${Palette.YB600}` };

function HeaderMenuList(props) {
  const user = useUserState();
  const history = useHistory();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(['user_id']);
  const onDropdownClick = () => setIsActive(!isActive);

  //console.log(isActive);
  useEffect(() => {
    const pageClickEvent = e => {
      if (dropdownRef.current !== null) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  const onLogOut = async () => {
    const response = await authAPI.postLogout();
    if (response.type === 'success') {
      removeCookie('user_id');
      history.push('/');
    } else {
      console.log('Logout failed');
    }
  };

  return (
    <S.PositionMenuList>
      {user?.profile_photo ? <S.ProfileImg src={user.profile_photo} onClick={onDropdownClick}>
      </S.ProfileImg> :
        <S.UserIcon>
          <FaRegUser size={25} style={userIconStyle} onClick={onDropdownClick} />
        </S.UserIcon>
      }
      
      {isActive && (
        <S.MenuNav ref={dropdownRef} isActive={isActive}>
          <Link to="/my-page">
            <S.MenuItem>
              <FaRegUser style={IconStyle}></FaRegUser>
              <S.MenuFont>마이페이지</S.MenuFont>
            </S.MenuItem>
          </Link>
          <Link to="/alerts">
            <S.MenuItem>
              <FaRegBell style={IconStyle}></FaRegBell>
              <S.MenuFont>알림</S.MenuFont>
            </S.MenuItem>
          </Link>
          <Link to="/settings">
            <S.MenuItem>
              <FaCog style={IconStyle}></FaCog>
              <S.MenuFont>설정</S.MenuFont>
            </S.MenuItem>
          </Link>
          <S.MenuItem onClick={onLogOut}>
            <FaSignOutAlt style={IconStyle}></FaSignOutAlt>
            <S.MenuFont>로그아웃</S.MenuFont>
          </S.MenuItem>
        </S.MenuNav>
      )}
    </S.PositionMenuList>
  );
}

export default HeaderMenuList;
