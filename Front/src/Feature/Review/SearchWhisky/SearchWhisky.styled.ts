import styled, { css } from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { TypoGraphyTheme } from '../../../lib/css/Typography';


const SearchWrapper = styled.div`
  display: flex;
  
  position: relative;

  width: 100%;
  max-width: 1200px;

  background-color: #e7e5de;
  border-radius: 2px;

  padding: 6px 0px;
  padding-left: 8px;
`;

const SearchIcon = styled(FiSearch)`
  color: #5c5955;
  font-size: 16px;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  padding: 0;

  ${TypoGraphyTheme.body1}

  background-color: inherit;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #837f7c;
    font-size: 15px;
  }
`;

export default {
  SearchWrapper,
  SearchIcon,
  SearchInput,
};
