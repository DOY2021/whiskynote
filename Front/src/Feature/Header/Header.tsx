import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Button from '../../shared/Button/Button';
import { Link, useHistory } from 'react-router-dom';

import { useCookies } from 'react-cookie';
import S from './Header.styled';
import HeaderMenuList from './HeaderMenuList';
import Palette from '../../lib/css/Pallete';
import P from '../../shared/P/P';


const SearchIcon = styled(FaSearch)`
  color: ${Palette.Gray500};
  font-size: 16px;
  margin-left: 25px;
`;

function Header() {
  const [cookie] = useCookies(['user_id']);

  return (
    <S.Nav>
      <S.NavHeader>
        <S.NavLeftContent>
          <S.NavLeft>
            <Link to="/">
              <img src={'../../../assets/logo/logo.svg'}></img>
            </Link>
          </S.NavLeft>
          <S.NavCenter>
            <S.MenuLink to="#">
              <P>위스키 찾기</P>
            </S.MenuLink>
            <S.MenuMargin></S.MenuMargin>
            <S.MenuLink to="#">
              <P>위스키 바</P>
            </S.MenuLink>
            <S.MenuMargin></S.MenuMargin>
            <S.MenuLink to="#">
              <P>커뮤니티</P>
            </S.MenuLink>
            <S.MenuMargin></S.MenuMargin>
            {/* <SearchIcon></SearchIcon>
          <S.SearchInput></S.SearchInput> */}
          </S.NavCenter>
        </S.NavLeftContent>
        <S.NavRight>
          {!cookie.user_id && (
            <> 
              <Link to="/login">
                <S.MenuBtn>
                  <P>로그인</P>
                </S.MenuBtn>
              </Link>
              <Link to="/signup">
                <S.SignUpBtn>
                  <P>회원가입</P>
                </S.SignUpBtn>
              </Link>
            </>
          )}
          {cookie.user_id && (
            <HeaderMenuList></HeaderMenuList>
          )}
        </S.NavRight>
      </S.NavHeader>
    </S.Nav>
  );
}

export default Header;
