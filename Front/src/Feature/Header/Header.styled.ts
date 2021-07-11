import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Palette from '../../css/Palette';

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
  MenuMargin
}