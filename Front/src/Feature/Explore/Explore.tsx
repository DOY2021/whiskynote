import React, { Suspense } from 'react'
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
import { useParams } from 'react-router';
import useWhiskyMain from '../../hook/swr/useWhiskyMain';
import { getProperOrdering } from './utils';
import { useCallback } from 'react';
import { mockWhisky, WhiskyInfoProp } from '../../model/Whisky';
import { Link } from 'react-router-dom';

function Explore() {

  const {order_by, category} = useParams<ExploreParamProp>();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  const {data: infos, isLoading} = useWhiskyMain({
    search: `${query}`,
    ordering: getProperOrdering(order_by),
    page: 1,
  })

  const renderInfoCard = useCallback((info: WhiskyInfoProp) => {
    return <InfoCard info={info} key={info.id}/>
  },[])

  
  if(isLoading) (
    <div>
      Loading
    </div>
  )

  return (
    <Suspense fallback={<div>Hi</div>}>
      <S.ExploreWrapper>
        <S.ExploreSideBarWrapper>
          <Category/>
          <Link to='/registerWhisky'>
            <Button variant='black'>+ 새 위스키 등록</Button>
          </Link>
        </S.ExploreSideBarWrapper>
        <S.ExploreMainWrapper>
          <SearchWhisky/>
          <S.ExploreMainTitleWithOrdering>
            <P size={TypoGraphyCategory.subtitle}>{CATEGORY_ENUM[category]}</P>
            <OrderingBox/>
          </S.ExploreMainTitleWithOrdering>
          <S.ExploreMainCardList>
            {/* {infos && infos.results.map(renderInfoCard)} */}
            {[mockWhisky, mockWhisky].map(renderInfoCard)}
          </S.ExploreMainCardList>
        </S.ExploreMainWrapper>
      </S.ExploreWrapper>
    </Suspense>
  )
}

export default Explore
