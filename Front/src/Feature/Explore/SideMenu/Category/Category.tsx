import React from 'react'
import { useCallback } from 'react'
import P from '../../../../shared/P/P'
import S from './Category.styled'

const CATEGORY_SET = ['전체', '싱글몰트 위스키', '그레인 위스키', '블렌디드 위스키']

type CategoryProps = {
  handleClick: (param:string) => void;
}

function Category({
  handleClick
}:CategoryProps) {

  const renderItems = useCallback((item,idx) => {
    return (
      <S.CategoryItemWrapper key={item} onClick={() => handleClick(item)}>
        <P>{item}</P>
      </S.CategoryItemWrapper>
    )
  },[])

  return (
    <>
      <P>카테고리</P>
      <S.CategoryWrapper>
        {CATEGORY_SET.map(renderItems)}
      </S.CategoryWrapper>
    </>
  )
}

export default Category
