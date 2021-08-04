import React from 'react'
import { useHistory, useParams } from 'react-router'
import P from '../../../../shared/P/P'
import { ExploreParamProp } from '../../constants';
import S from './orderingBox.styled'

function OrderingBox() {
  const history = useHistory();
  const { order_by, category } = useParams<ExploreParamProp>()

  const handlePopularClick = () => {
    history.push(`/explore/popular/${category}`)   
  }
  const handleRecentClick = () => {
    history.push(`/explore/recent/${category}`)   
  }

  return (
    <S.orderingBoxWrapper>
      <P onClick={handlePopularClick}>인기순</P>
      <P onClick={handleRecentClick}>최신순</P>
    </S.orderingBoxWrapper>
  )
}

export default OrderingBox
