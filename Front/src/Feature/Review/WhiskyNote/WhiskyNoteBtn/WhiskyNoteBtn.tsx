import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Palette from '../../../../lib/css/Pallete';

export interface TagButtonProp {
  text: string,
  low?: boolean,
  onClick: (e) => void
}


const LowerLevelBtn = styled.button<TagButtonProp>`
  background-color: #edece6;
  border: 1px solid #9c9b99;
  color: #2f2e2d;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  cursor:pointer;
  width: 144px;
  height: 49px;

  &:focus{
    background-color: #d9d6c4;
  }
`;



const Btn = styled.button<TagButtonProp>`
background-color: #e7e5de;
color: #2f2e2d;
outline: none;
width: 144px;
height: 49px;
align-items: center;
border-radius: 4px;
border: transparent;
margin-left: 10px;
cursor:pointer;
`;


function WhiskyNoteBtn({text, low, onClick}: TagButtonProp) {
 const [backgroundColor, selectBackgroundColor] = useState('');

  return (
    <>
      {!low && <Btn value={text} text={text} onClick={onClick}>{text}</Btn>}
      {low && <LowerLevelBtn value={text} text={text} onClick={onClick}>{text}</LowerLevelBtn>}
    </>
  );
}

export default WhiskyNoteBtn;
