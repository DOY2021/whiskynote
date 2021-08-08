import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Palette from '../../lib/css/Pallete';
import { TypoGraphyCategory, TypoGraphyTheme } from '../../lib/css/TempTypo';


type StyleParenProp = Pick<ParenProp, 'color' | 'size' | 'isInline' | 'bold'>;

export type ParenProp = {
  color?: Palette;
  bold?: boolean;
  size?: TypoGraphyCategory;
  children: React.ReactNode;
  id?: string;
  isInline?: boolean
} & React.HTMLAttributes<HTMLParagraphElement>

function P({
  color,
  size = TypoGraphyCategory.body,
  isInline = false,
  children,
  id,
  bold,
  ...props
}: ParenProp) {
  return (
    <Paren bold={bold}  color={color} size={size} id={id} isInline={isInline} {...props}>
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
  `}
`;

export default P;
