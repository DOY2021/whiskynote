import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  background-color: white;
`;

const MenuBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #272624;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
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
  NavRight,
  MenuLink,
  SearchInput,
  MenuMargin,
  MenuBtn,
  SignUpBtn,
};
