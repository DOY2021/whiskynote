import { css, FlattenSimpleInterpolation } from "styled-components";

const title = css`
    font-weight: 600;
    font-size: 48px;
    line-height: 62.4px;
`;

const subtitle = css`
    font-weight: 500;
    font-size: 24px;
    line-height: 33.6px;
`;

const body = css`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
`;

const body2 = css`
    font-weight: 400;
    font-size: 16px;
    line-height: 22.4px;
`

const body3 = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 22.4px;
`


export enum TypoGraphyCategory {
  title = 'title',
  subtitle = 'subtitle',
  body = 'body',
  body2= 'body2',
  body3= 'body3',
}
  
export const TypoGraphyTheme : { [typo in TypoGraphyCategory] : FlattenSimpleInterpolation} = {
  [TypoGraphyCategory.title] : title,
  [TypoGraphyCategory.subtitle] : subtitle,
  [TypoGraphyCategory.body] : body,
  [TypoGraphyCategory.body2] : body2,
  [TypoGraphyCategory.body3] : body3,
  
}

export default {
  title,
  subtitle,
  body,
  body2
}