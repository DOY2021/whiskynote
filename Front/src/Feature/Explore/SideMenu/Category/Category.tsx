import React from 'react'
import { useCallback } from 'react'
import { useHistory, useParams } from 'react-router'
import P from '../../../../shared/P/P'
import { CATEGORY_SET } from '../../constants'
import S from './Category.styled'

// const CATEGORY_SET = ['전체', '싱글몰트 위스키', '그레인 위스키', '블렌디드 위스키']


function Category() {

  const history = useHistory();
  const {order_by, category} = useParams<any>();

  const handleClick = (param:string) => {
    const route = `/explore/${order_by}/${param}`;
    history.push(route);
  }

  const renderItems = useCallback((item,idx) => {
    return (
      <S.CategoryItemWrapper key={item[0]} onClick={() => handleClick(item[0])}>
        <P>{item[1]}</P>
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
