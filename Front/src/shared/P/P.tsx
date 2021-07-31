import React from 'react';
import styled, { css } from 'styled-components';

import Palette from '../../lib/css/Pallete';
import { TypoGraphyCategory, TypoGraphyTheme } from '../../lib/css/TempTypo';


type StyleParenProp = Pick<ParenProp, 'color' | 'fontSize' | 'isInline' | 'pre'>;

export interface ParenProp extends React.HTMLProps<HTMLParagraphElement>{
  color?: Palette;
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
}: ParenProp) {
  return (
    <Paren color={color} fontSize={fontSize} id={id} isInline={isInline} pre={pre}>
      {children}
    </Paren>
  );
}

const Paren = styled.p<StyleParenProp>`
  ${({ fontSize }) => fontSize && TypoGraphyTheme[fontSize]}

  color: inherit;

  ${({ color }) => color && css`
    color: ${color};
  `}
  ${({isInline}) => isInline && css`
    display: inline-block;
  `}

  ${({pre}) => pre && css`
    white-space: ${pre};
  `}
`;

export default P;
