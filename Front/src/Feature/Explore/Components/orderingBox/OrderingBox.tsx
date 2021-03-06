import React from 'react'
import { useHistory, useParams } from 'react-router'
import Palette from '../../../../lib/css/Pallete';
import { TypoGraphyCategory } from '../../../../lib/css/TempTypo';
import P from '../../../../shared/P/P'
import { ExploreParamProp, OrderByProp, ORDER_BY_ENUM } from '../../constants';
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

  const getColor = (current_order: OrderByProp) => {
    return order_by === current_order ? Palette.WhiskyBlack : Palette.WhiskyWhite
  }

  const isBold = (current_order : OrderByProp) => {
    return order_by === current_order
  }

  return (
    <S.orderingBoxWrapper>
      <div style={{cursor: 'pointer'}}>
        <P size={TypoGraphyCategory.body1} onClick={handlePopularClick} color={getColor('popular')} bold={isBold('popular')} >인기순</P>
      </div>
      <div style={{cursor: 'pointer'}}>
         <P size={TypoGraphyCategory.body1} onClick={handleRecentClick} color={getColor('recent')} bold={isBold('recent')}>최신순</P>
      </div>
    </S.orderingBoxWrapper>
  )
}

export default OrderingBox
