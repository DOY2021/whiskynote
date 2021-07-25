import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '../../../lib/css/Typography';

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
  margin-top:16px;
  padding: 10px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #837f7c;
    font-size: 15px;
  }

  &:focus {
    outline: none;
  }
`;

const TextCount = styled.p`
  color: #5f5e5b;
  ${Typography.body1};
  float: right;
`;

function TextField(props) {
  const [text, setTextState] = useState('');

  const handleTextAreaInput = e => {
    setTextState(e.target.value);
  };
  return (
    <>
      <Input
        maxLength={2000}
        value={text}
        placeholder="위스키에 대해 설명해주세요"
        onChange={handleTextAreaInput}
      ></Input>
      <TextCount>{text.length}/2000</TextCount>
    </>
  );
}

export default TextField;
