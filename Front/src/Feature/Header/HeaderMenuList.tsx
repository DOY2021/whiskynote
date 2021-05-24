import React, { useEffect, useRef, useState } from 'react';
import { FaCog, FaRegBell, FaRegUser, FaSignOutAlt } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { authAPI } from '../../api/auth';
import Palette from '../../css/Palette';
import { useCookies } from 'react-cookie';

type activeProp = {
  isActive: boolean;
};

const trans = keyframes`
  from {
    transForm: translateY(-10px);
  }
  to {
    transForm: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const MenuNav = styled.nav<activeProp>`
  position: absolute;
  top: 50px;
  width: 176px;
  height: 176px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  border-radius: 8px;
  background-color: white;
  right: 0px;
  visibility: hidden;
  animation: ${slideIn} 0.4s ease, ${trans} 0.4s ease, visibility 0.4s;

  ${props =>
    props.isActive &&
    `
        visibility: visible;
  `}
`;

const MenuFont = styled.div`
  font-size: 16px;
  color: ${Palette.Gray900};
  margin-left: 10px;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px;
  &:hover {
    background-color: ${Palette.Gray000};
  }
`;

const PositionMenuList = styled.div`
  position: relative;
`;

const UserIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-top: 10px;
  float: right;
  cursor: pointer;
`;

const userIconStyle = {
  color: Palette.Gray500,
  fontSize: '25',
  marginTop: '5',
};

const IconStyle = { fontSize: '20px', color: `${Palette.YB400}` };

function HeaderMenuList(props) {
  const history = useHistory();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(['user_id']);
  const onDropdownClick = () => setIsActive(!isActive);

  console.log(isActive);
  useEffect(() => {
    //component mounted
    const pageClickEvent = e => {
      if (dropdownRef.current !== null) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      //component unmounted
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
    <PositionMenuList>
      <UserIcon>
        <FaRegUser size={25} style={userIconStyle} onClick={onDropdownClick} />
      </UserIcon>
      {isActive && (
        <MenuNav ref={dropdownRef} isActive={isActive}>
          <Link to="/my-page">
            <MenuItem>
              <FaRegUser style={IconStyle}></FaRegUser>
              <MenuFont>마이페이지</MenuFont>
            </MenuItem>
          </Link>
          <Link to="/alerts">
            <MenuItem>
              <FaRegBell style={IconStyle}></FaRegBell>
              <MenuFont>알림</MenuFont>
            </MenuItem>
          </Link>
          <Link to="/settings">
            <MenuItem>
              <FaCog style={IconStyle}></FaCog>
              <MenuFont>설정</MenuFont>
            </MenuItem>
          </Link>
          <MenuItem onClick={onLogOut}>
            <FaSignOutAlt style={IconStyle}></FaSignOutAlt>
            <MenuFont>로그아웃</MenuFont>
          </MenuItem>
        </MenuNav>
      )}
    </PositionMenuList>
  );
}

export default HeaderMenuList;
