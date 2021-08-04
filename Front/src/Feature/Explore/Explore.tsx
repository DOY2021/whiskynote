import React from 'react'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router';
import P from '../../shared/P/P';
import SearchWhisky from '../Review/SearchWhisky/SearchWhisky';
import OrderingBox from './Components/orderingBox/OrderingBox';
import orderingBox from './Components/orderingBox/OrderingBox';
import { CATEGORY_ENUM, ExploreParamProp } from './constants';
import S from './Explore.styled'
import Category from './SideMenu/Category/Category'

function Explore() {

  const [test, setTest] = useState('false');
  const {order_by, category} = useParams<ExploreParamProp>();
  const l = useLocation();

  const handleClick = (param:string) => {
    setTest(param);
  }

  return (
    <S.ExploreWrapper>
      <S.ExploreSideBarWrapper>
        <Category handleClick={handleClick}/>
      </S.ExploreSideBarWrapper>
      <S.ExploreMainWrapper>
        <SearchWhisky/>
        <S.ExploreMainTitleWithOrdering>
          <P>{CATEGORY_ENUM[category]}</P>
          <OrderingBox/>
        </S.ExploreMainTitleWithOrdering>
      </S.ExploreMainWrapper>
    </S.ExploreWrapper>
  )
}

export default Explore
