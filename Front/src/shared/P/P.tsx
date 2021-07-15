import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
=======
import styled, { css } from 'styled-components';

>>>>>>> ef87aab07afe2baff5e73bac3ec6cbe4773adf57
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
<<<<<<< HEAD
  size = TypoGraphyCategory.body3,
=======
  size = TypoGraphyCategory.body,
  isInline=false,
>>>>>>> ef87aab07afe2baff5e73bac3ec6cbe4773adf57
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
