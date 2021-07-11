import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Button from '../../shared/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import Palette from '../../css/Palette';
import { useCookies } from 'react-cookie';
import S from './Header.styled';
import HeaderMenuList from './HeaderMenuList';

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
        <S.NavLeft>
          <Link to="/">
            <img src={'../../../assets/logo/logo.svg'}></img>
          </Link>
        </S.NavLeft>
        <S.NavCenter>
          <S.MenuLink to="#">위스키 찾기</S.MenuLink>
          <S.MenuMargin></S.MenuMargin>
          <S.MenuLink to="#">위스키 바</S.MenuLink>
          <S.MenuMargin></S.MenuMargin>
          <S.MenuLink to="#">커뮤니티</S.MenuLink>
          <S.MenuMargin></S.MenuMargin>
          {/* <SearchIcon></SearchIcon>
          <S.SearchInput></S.SearchInput> */}
        </S.NavCenter>
        <S.NavRight>
          {!cookie.user_id && (
            <> 
              <Link to="/login">
                <S.MenuBtn>
                  로그인
                </S.MenuBtn>
              </Link>
              <Link to="/signup">
                <S.SignUpBtn>
                  회원가입
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
