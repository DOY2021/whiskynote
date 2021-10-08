import { css, FlattenSimpleInterpolation } from 'styled-components';

const title = css`
  font-family: Pretendard-SemiBold;
  font-size: 40px;
  line-height: 140%;
`;

const title2 = css`
  font-family: Pretendard-SemiBold;
  font-size: 36px;
  line-height: 140%;
`;


const subtitle = css`
  font-family: Pretendard-Medium;
  font-size: 32px;
  line-height: 140%;
`;

const subtitle2 = css`
  font-family: Pretendard-Medium;
  font-size: 24px;
  line-height: 140%;
`;

const subtitle3 = css`
  font-family: Pretendard-Medium;
  font-size: 20px;
  line-height: 140%;
`;

const subtitle4 = css`
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  line-height: 22.4px;
`;

const body = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
`;

const body1 = css`
  font-size: 18px;
  line-height: 140%;
`;

const body2 = css`
  font-size: 16px;
  line-height: 140%;
`;

const body3 = css`
  font-family: Pretendard-SemiBold;
  font-size: 12px;
  line-height: 140%;
`;

const bodyLarge = css`
  font-size: 24px;
  line-height: 140%;
`

export enum TypoGraphyCategory {
  title = 'title',
  title2 = 'title2',
  subtitle = 'subtitle',
  subtitle2 = 'subtitle2',
  subtitle3 = 'subtitle3',
  subtitle4 = 'subtitle4',
  body = 'body',
  body1 = 'body1',
  body2 = 'body2',
  body3 = 'body3',
  bodyLarge = 'bodyLarge',
}

export const TypoGraphyTheme: {
  [typo in TypoGraphyCategory]: FlattenSimpleInterpolation;
} = {
  [TypoGraphyCategory.title]: title,
  [TypoGraphyCategory.title2]: title,
  [TypoGraphyCategory.subtitle]: subtitle,
  [TypoGraphyCategory.subtitle2]: subtitle2,
  [TypoGraphyCategory.subtitle3]: subtitle3,
  [TypoGraphyCategory.subtitle4]: subtitle4,
  [TypoGraphyCategory.body]: body,
  [TypoGraphyCategory.body1]: body1,
  [TypoGraphyCategory.body2]: body2,
  [TypoGraphyCategory.body3]: body3,
  [TypoGraphyCategory.bodyLarge]: bodyLarge,
};

export default {
  title,
  subtitle,
  subtitle2,
  subtitle3,
  subtitle4,
  body,
  body2,
  body3,
  bodyLarge
};
