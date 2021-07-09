import { css, FlattenSimpleInterpolation } from "styled-components";



const display6 = css`
  font-size: 72px;
  line-height: 108px;
  font-weight: 700;
`;

const display5 = css`
  font-size: 60px;
  line-height: 90px;
  font-weight: 700;
`;

const display4 = css`
  font-size: 48px;
  line-height: 72px;
  font-weight: 700;
`;

const display3 = css`
  font-size: 36px;
  line-height: 52px;
  font-weight: 500;
`;

const display2 = css`
  font-size: 32px;
  line-height: 45px;
  font-weight: 500;
`;

const display1 = css`
  font-size: 21px;
  line-height: 34px;
  font-weight: 500;
`;

const headline = css`
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
`;

const subhead4 = css`
  font-size: 18px;
  line-height: 29px;
  font-weight: 700;
`;

const subhead3 = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
`;

const subhead2 = css`
  font-size: 14px;
  line-height: 23px;
  font-weight: 700;
`;

const subhead1 = css`
  font-size: 12px;
  line-height: 19px;
  font-weight: 700;
`;

const body6 = css`
  font-size: 48px;
  line-height: 72px;
  font-weight: 400;
`;

const body5 = css`
  font-size: 36px;
  line-height: 58px;
  font-weight: 400;
`;

const body4 = css`
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
`;

const body3 = css`
  font-size: 21px;
  line-height: 32px;
  font-weight: 400;
`;

const body2 = css`
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
`;

const body1 = css`
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
`;

const body0 = css`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
`;

const body = css`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;

export enum TypoGraphyCategory {
  display6 = 'display6',
  display5 = 'display5',
  display4 = 'display4',
  display3 = 'display3',
  display2 = 'display2',
  display1 = 'display1',
  body6 = 'body6',
  body5 = 'body5',
  body4 = 'body4',
  body3 = 'body3',
  body2 = 'body2',
  body1 = 'body1',
  body = 'body',
  subhead4 = 'subhead4',
  subhead3 = 'subhead3',
  subhead2 = 'subhead2',
  subhead1 = 'subhead1',
  headline = 'headline'
}

export const TypoGraphyTheme : { [typo in TypoGraphyCategory] : FlattenSimpleInterpolation} = {
  [TypoGraphyCategory.body1] : body1,
  [TypoGraphyCategory.body2] : body2,
  [TypoGraphyCategory.body3] : body3,
  [TypoGraphyCategory.body4] : body4,
  [TypoGraphyCategory.body5] : body5,
  [TypoGraphyCategory.body6] : body6,
  [TypoGraphyCategory.body] : body,
  [TypoGraphyCategory.display1] : display1,
  [TypoGraphyCategory.display2] : display2,
  [TypoGraphyCategory.display3] : display3,
  [TypoGraphyCategory.display4] : display4,
  [TypoGraphyCategory.display5] : display5,
  [TypoGraphyCategory.display6] : display6,
  [TypoGraphyCategory.subhead1] : subhead1,
  [TypoGraphyCategory.subhead2] : subhead2,
  [TypoGraphyCategory.subhead3] : subhead3,
  [TypoGraphyCategory.subhead4] : subhead4,
  [TypoGraphyCategory.headline] : headline,
}


export default {
  body,
  body0,
  body1,
  body2,
  body3,
  body4,
  body5,
  body6,
  subhead1,
  subhead2,
  subhead3,
  subhead4,
  headline,
  display1,
  display2,
  display3,
  display4,
  display5,
  display6,
};
