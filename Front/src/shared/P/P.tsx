import React from 'react';
import styled, { css } from 'styled-components';

import Palette from '../../lib/css/Pallete';
import { TypoGraphyCategory, TypoGraphyTheme } from '../../lib/css/TempTypo';


type StyleParenProp = Pick<ParenProp, 'color' | 'size'>;

export type ParenProp = {
  color?: Palette;
  size?: TypoGraphyCategory;
  children: React.ReactNode;
  id?: string;
};

function P({
  color = Palette.Black,
  size = TypoGraphyCategory.body,
  children,
  id,
}: ParenProp) {
  return (
    <Paren color={color} size={size} id={id}>
      {children}
    </Paren>
  );
}

const Paren = styled.p<StyleParenProp>`
  ${({ size }) => size && TypoGraphyTheme[size]}
  ${({ color }) => color && Palette[color]}
`;

export default P;
