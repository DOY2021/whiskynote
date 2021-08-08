import React from 'react'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router';
import { TypoGraphyCategory } from '../../lib/css/TempTypo';
import Button from '../../shared/Button/Button';
import P from '../../shared/P/P';
import SearchWhisky from '../Review/SearchWhisky/SearchWhisky';
import OrderingBox from './Components/orderingBox/OrderingBox';
import qs from 'qs'
import { CATEGORY_ENUM, ExploreParamProp } from './constants';
import S from './Explore.styled'
import Category from './SideMenu/Category/Category'
import InfoCard from './Components/InfoCard/InfoCard';

function Explore() {

  const [test, setTest] = useState('false');
  const {order_by, category} = useParams<ExploreParamProp>();
  const l = useLocation();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  return (
    <S.ExploreWrapper>
      <S.ExploreSideBarWrapper>
        <Category/>
        <Button variant={'grayscale'}>+ 새 위스키 등록</Button>
      </S.ExploreSideBarWrapper>
      <S.ExploreMainWrapper>
        <SearchWhisky/>
        <S.ExploreMainTitleWithOrdering>
          <P size={TypoGraphyCategory.subtitle}>{CATEGORY_ENUM[category]}</P>
          <OrderingBox/>
        </S.ExploreMainTitleWithOrdering>
        <S.ExploreMainCardList>
          <InfoCard/>
        </S.ExploreMainCardList>
      </S.ExploreMainWrapper>
    </S.ExploreWrapper>
  )
}

export default Explore
