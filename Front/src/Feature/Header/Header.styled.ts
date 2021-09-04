import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuBtn = styled.button`
  font-family: Pretendard-SemiBold;
  background-color: transparent;
  cursor: pointer;
  color: #201f1e;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  margin-right: 20px;
  padding: 10px 16px;
`;
const SignUpBtn = styled.div`
  font-family: Pretendard-SemiBold;
  background-color: transparent;
  cursor: pointer;
  color: #201f1e;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  border: 1px solid #201f1e;
  padding: 10px 16px;
`;

const MenuLink = styled.div`
  font-family: Pretendard-Medium;

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
  height: 1px;
  background-color: #736c64;
  margin-bottom: 60px;
`;

export default {
  MenuLink,
  SearchInput,
  MenuMargin,
  MenuBtn,
  SignUpBtn,
  Line,
};
