import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Button from '../../shared/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import Palette from '../../css/Palette';
import { useCookies } from 'react-cookie';

import HeaderMenuList from './HeaderMenuList';


const Nav = styled.div`
  background-color: white;
`;
const NavHeader = styled.div`
  align-items: center;
  justify-items: center;
  display: flex;
  width: 100%;
`;
const NavLeft = styled.div`
  width: 20%;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
const NavCenter = styled.div`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  text-align: center;
`;

const NavRight = styled.div`
  width: 20%;
  text-align: center;
`;

const MenuLink = styled(Link)`
  font-size: 16px;
  color: #495057;
  font-family: 'Noto Sans KR', sans-serif;

  width: 100px;
  height: 60px;
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  text-align: center;

  &:hover {
    color: ${Palette.YB600};
  }
  &:active {
    color: ${Palette.YB500};
  }
`;

const SearchInput = styled.input`
  background-color: white;
`;

const SearchIcon = styled(FaSearch)`
  color: ${Palette.Gray500};
  font-size: 16px;
  margin-left: 25px;
`;

const MenuMargin = styled.div`
  margin-right: 4px;
`;


function Header() {
  const [cookie] = useCookies(['user_id']);


  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <Link to="/">
            <img src={'../../../assets/logo/logo.svg'}></img>
          </Link>
        </NavLeft>
        <NavCenter>
          <MenuLink to="#">위스키</MenuLink>
          <MenuMargin></MenuMargin>
          <MenuLink to="#">위스키 바</MenuLink>
          <MenuMargin></MenuMargin>
          <MenuLink to="#">커뮤니티</MenuLink>
          <MenuMargin></MenuMargin>
          <MenuLink to="#">서비스 소개</MenuLink>
          <SearchIcon></SearchIcon>
          <SearchInput></SearchInput>
        </NavCenter>
        <NavRight>
          {!cookie.user_id && (
            <>
              <Link to="/signup">
                <Button variant="primary" size="large" type="text">
                  회원가입
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="primary" size="large">
                  로그인
                </Button>
              </Link>
            </>
          )}
          {cookie.user_id && (
            <HeaderMenuList></HeaderMenuList>
          )}
        </NavRight>
      </NavHeader>
    </Nav>
  );
}

export default Header;
