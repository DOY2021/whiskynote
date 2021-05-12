import React from 'react';
import styled, { css } from 'styled-components';
import Palette from '../../lib/css/Pallete';
import Button from '../../shared/Button/Button';
import { Link } from 'react-router-dom';

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
  width: 30%;
  align-items: center;
  text-align: center;
`;
const NavCenter = styled.div`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  text-align: center;
`;

const NavRight = styled.div`
  width: 30%;
  text-align: center;
`;

const MenuLink = styled(Link)`
  font-size: 16px;
  color: ${Palette.Gray800};
  font-family: 'Noto Sans KR', sans-serif;

  width: 120px;
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

const MenuMargin = styled.div`
  margin-right: 4px;
`;
function Header() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <img src={'../../../assets/logo/Texter.svg'}></img>
        </NavLeft>
        <NavCenter>
          <MenuLink to="#">피드</MenuLink>
          <MenuMargin></MenuMargin>
          <MenuLink to="#">카테고리</MenuLink>
          <MenuMargin></MenuMargin>
          <MenuLink to="#">큐레이터</MenuLink>
          <MenuMargin></MenuMargin>
          <MenuLink to="#">서비스 소개</MenuLink>
        </NavCenter>
        <NavRight>
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
        </NavRight>
      </NavHeader>
    </Nav>
  );
}

export default Header;
