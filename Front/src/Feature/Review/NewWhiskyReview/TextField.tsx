import React, { useRef, useState } from 'react';
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
  padding: 20px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #837f7c;
    font-size: 15px;
  }

  &:focus {
    outline: none;
  }

  margin-top:16px;
  :hover{
    outline: 1px solid black;
  }
`;

const TextCount = styled.p`
  color: #5f5e5b;
  ${Typography.body1};
  float: right;
  margin-top:8px;
`;

function TextField(props: {text:any, handleTextAreaInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void}) {
 
  return (
    <>
      <Input
        maxLength={2000}
        value={props.text}
        placeholder="리뷰를 작성해주세요."
        onChange={props.handleTextAreaInput}
      ></Input>
      <TextCount>{props.text.length}/2000</TextCount>
    </>
  );
}

export default TextField;
