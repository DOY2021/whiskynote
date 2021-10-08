import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Palette from '../../lib/css/Pallete';
import { TypoGraphyCategory, TypoGraphyTheme } from '../../lib/css/TempTypo';


type StyleParenProp = Pick<ParenProp, 'pre' | 'color' | 'size' | 'isInline' | 'bold' | 'marginLeft' |'marginRight' | 'semiBold'>;

export interface ParenProp extends React.HTMLAttributes<HTMLParagraphElement>{
  color?: Palette;
  bold?: boolean;
  semiBold?: boolean;
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
  semiBold = false,
  marginRight,
  ...props
}: ParenProp) {
  return (
    <Paren
      bold={bold}
      semiBold={semiBold}
      pre={pre}
      color={color} 
      size={fontSize}
      id={id}
      isInline={isInline}
      marginLeft={marginLeft} 
      marginRight={marginRight} 
      {...props}>
      {children}
    </Paren>
  );
}

const Paren = styled.p<StyleParenProp>`
  ${({ size }) => size && TypoGraphyTheme[size]}

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
  ${({semiBold}) => semiBold && css`
    font-weight: 600;
    `
}
  ${({pre}) => pre && css`
    white-space: ${pre};
  `}
`;

export default P;
