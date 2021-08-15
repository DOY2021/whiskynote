import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #272624;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  margin-right: 10px;
`;
const SignUpBtn = styled.div`
  background-color: transparent;
  cursor: pointer;
  color: #201f1e;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  border: 1px solid #272624;
  padding: 7px;
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

const Line = styled.div`
  width: 100%;
  margin-bottom: 60px;
  border: 1px solid #736c64;
`;

export default {
  MenuLink,
  SearchInput,
  MenuMargin,
  MenuBtn,
  SignUpBtn,
  Line,
};
