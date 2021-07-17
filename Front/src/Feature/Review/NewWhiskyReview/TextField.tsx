import React from 'react';
import styled from 'styled-components';

const Input = styled.textarea`
  display: flex;

  width: 100%;
  max-width: 1200px;
  height: 300px;

  background-color: #e7e5de;
  border-radius: 2px;

  padding: 6px 0px;
  padding-left: 8px;
  border: transparent;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #837f7c;
    font-size: 15px;
  }

  &:focus {
    outline: none;
  }
`;
function TextField(props) {
  return <Input placeholder="위스키에 대해 설명해주세요"></Input>
}

export default TextField;
