export enum CATEGORY_ENUM {
  'total'= '전체',
  'single_molt'='싱글몰트 위스키',
  'grain' = '그레인 위스키',
  'blended' = '블렌디드 위스키',
}
  
export const CATEGORY_SET = Object.entries(CATEGORY_ENUM)

export enum ORDER_BY_ENUM {
  'popular' = '인기순',
  'recent' = '최신순',
}

export const ORDER_BY_SET = Object.entries(ORDER_BY_ENUM)
  
export type OrderByProp = 'popular' | 'recent'

export interface ExploreParamProp {
  ['order_by']: OrderByProp
  'category': CATEGORY_ENUM
}