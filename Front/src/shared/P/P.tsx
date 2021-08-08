import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Palette from '../../lib/css/Pallete';
import { TypoGraphyCategory, TypoGraphyTheme } from '../../lib/css/TempTypo';


type StyleParenProp = Pick<ParenProp, 'pre' | 'color' | 'size' | 'isInline' | 'bold'>;

export interface ParenProp extends React.HTMLAttributes<HTMLParagraphElement>{
  color?: Palette;
  bold?: boolean;
  size?: TypoGraphyCategory;
  fontSize?: TypoGraphyCategory;
  children: React.ReactNode;
  id?: string;
  pre?: string;
  isInline?: boolean
}

function P({
  color,
  fontSize = TypoGraphyCategory.body,
  isInline = false,
  children,
  pre,
  id,
  bold,
  ...props
}: ParenProp) {
  return (
    <Paren bold={bold} pre={pre} color={color} size={fontSize} id={id} isInline={isInline} {...props}>
      {children}
    </Paren>
  );
}

const Paren = styled.p<StyleParenProp>`
  ${({ size }) => size && TypoGraphyTheme[size]}

  color: inherit;

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
