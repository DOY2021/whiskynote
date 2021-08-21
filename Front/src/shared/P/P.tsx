import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Palette from '../../lib/css/Pallete';
import { TypoGraphyCategory, TypoGraphyTheme } from '../../lib/css/TempTypo';


type StyleParenProp = Pick<ParenProp, 'pre' | 'color' | 'size' | 'isInline' | 'bold' | 'marginLeft' |'marginRight'>;

export interface ParenProp extends React.HTMLAttributes<HTMLParagraphElement>{
  color?: Palette;
  bold?: boolean;
  size?: TypoGraphyCategory;
  fontSize?: TypoGraphyCategory;
  children: React.ReactNode;
  id?: string;
  pre?: string;
  isInline?: boolean
  marginRight?: number
  marginLeft?: number
}

function P({
  color,
  fontSize = TypoGraphyCategory.body,
  isInline = false,
  children,
  pre,
  id,
  bold,
  marginLeft,
  marginRight,
  ...props
}: ParenProp) {
  return (
    <Paren bold={bold} pre={pre} color={color} size={fontSize} id={id} isInline={isInline} marginLeft={marginLeft} marginRight={marginRight} {...props}>
      {children}
    </Paren>
  );
}

const Paren = styled.p<StyleParenProp>`
  ${({ size }) => size && TypoGraphyTheme[size]}
  font-family: Pretendard sans-serif;

  color: #5C5956;

  margin-left: ${({marginLeft}) => `${marginLeft}px`};
  margin-left: ${({marginLeft}) => `${marginLeft}px`};
  margin-right: ${({marginRight}) => `${marginRight}px`};

  ${({ color }) => color && css`
    color: ${color};
  `}
  ${({isInline}) => isInline && css`
    display: inline-block;
  `}

  ${({bold}) => bold && css`
    font-weight: bold
    `
}
  ${({pre}) => pre && css`
    white-space: ${pre};
  `}
`;

export default P;
