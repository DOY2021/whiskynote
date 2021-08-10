import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  background-color: #EDECE6;
  min-width: 1200px;
  width: 100vw;
  padding: 20px 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid #736C64;
`;

const MenuBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #272624;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  margin-right:10px;
`;
const SignUpBtn = styled.div`
  background-color: transparent;
  cursor: pointer;
  color: #201F1E;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  border: 1px solid #272624;
  padding: 7px;
`;
const NavHeader = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;
  margin:0 auto;
`;

const NavLeftContent = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;

  width: 600px;
  height: 100%;

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
  width: 60%;
  text-align: center;
`;

const MenuLink = styled(Link)`
  font-family: 'Noto Sans KR', sans-serif;

  width: 100px;
  height: 60px;
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  text-align: center;

  cursor: pointer;
  color: #272624;
  font-size: 16px;
`;

const SearchInput = styled.input`
  background-color: white;
`;

const MenuMargin = styled.div`
  margin-right: 4px;
`;

export default {
  Nav,
  NavCenter,
  NavHeader,
  NavLeft,
  NavLeftContent,
  NavRight,
  MenuLink,
  SearchInput,
  MenuMargin,
  MenuBtn,
  SignUpBtn,
};
