import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link} from 'react-router-dom';

import { useCookies } from 'react-cookie';
import S from './Header.styled';
import HeaderMenuList from './HeaderMenuList';
import Palette from '../../lib/css/Pallete';
import P from '../../shared/P/P';
import Logo from '../../../assets/logo/logo.svg'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { TypoGraphyCategory } from '../../lib/css/TempTypo';

const SearchIcon = styled(FaSearch)`
  color: ${Palette.Gray500};
  font-size: 16px;
  margin-left: 25px;
`;

function Header() {
  const [cookie] = useCookies(['user_id']);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Nav.Link href="/">
              <Logo />
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Link to='/explore/popular/total' style={{color: '#212529'}}>
              <P size={TypoGraphyCategory.body2}>
                위스키 찾기
              </P>
            </Link>
            {/* <Nav.Link href="/explore/popular/total">위스키 찾기</Nav.Link> */}
            {/* <S.MenuMargin></S.MenuMargin>
          <S.MenuMargin></S.MenuMargin> */}
            {/* <SearchIcon></SearchIcon>
          <S.SearchInput></S.SearchInput> */}
          </Nav>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Navbar.Text>
              {!cookie.user_id && (
                <>
                  <Link to="/login">
                    <S.MenuBtn>
                      <P size={TypoGraphyCategory.body3}>로그인</P>
                    </S.MenuBtn>
                  </Link>
                  <Link to="/signup">
                    <S.SignUpBtn>
                      <P size={TypoGraphyCategory.body3}>회원가입</P>
                    </S.SignUpBtn>
                  </Link>
                </>
              )}
              {cookie.user_id && <HeaderMenuList></HeaderMenuList>}
            </Navbar.Text>
          </Navbar.Collapse>
       
        </Container>
      </Navbar>
      <S.Line></S.Line>
    </>
  );
}

export default Header;
