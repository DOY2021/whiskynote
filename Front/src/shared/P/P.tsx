import React from 'react';
import styled, { css } from 'styled-components';
import { TypoGraphyCategory, TypoGraphyTheme } from '../../css/TempTypo';
import Palette from '../../lib/css/Pallete';


type StyleParenProp = Pick<ParenProp, 'color' | 'size' | 'isInline'>;

export type ParenProp = {
  color?: Palette;
  size?: TypoGraphyCategory;
  children: React.ReactNode;
  isInline?: boolean;
  id?: string;
};

function P({
  color = Palette.Black,
  size = TypoGraphyCategory.body,
  isInline=false,
  children,
  id,
}: ParenProp) {
  return (
    <Paren color={color} size={size} id={id} isInline={isInline}>
      {children}
    </Paren>
  );
}

const Paren = styled.p<StyleParenProp>`
  ${({ size }) => size && TypoGraphyTheme[size]}
  ${({ color }) => color && Palette[color]}
  ${({isInline})=> isInline && css`
    display: inline-block;
  `}
`;

export default P;
