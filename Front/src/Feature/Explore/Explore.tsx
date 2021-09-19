import React, { Suspense, useEffect, useState } from 'react'
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
import { mockWhisky, WhiskyInfoProp, WhiskyMainProp } from '../../model/Whisky';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import WhiteSpace from '../../shared/WhiteSpace/WhiteSpace';
import Palette from '../../lib/css/Pallete';
import { AxiosResponse } from 'axios';
import { client } from '../../api/client';
import { whiskyAPI, WhiskyCreateParamProps, WhiskyMainParamProps, WhiskyMainProps } from '../../api/whisky';

function Explore() {

  const {order_by, category} = useParams<ExploreParamProp>();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  // const {data: infos, isLoading} = useWhiskyMain({
  //   page: 1,
  //   ordering: getProperOrdering(order_by),
  // })    
  const data: WhiskyMainParamProps = {  
    ordering: order_by,
    page: 1
}

  

  const [list ,setList] = useState<Array<WhiskyInfoProp> | undefined>();

  useEffect(() => {
    const test = async() => {
      const whiskyList: WhiskyMainProps | undefined =  await whiskyAPI.getWhiskyMain(data)
      setList(whiskyList?.results)
      console.log(whiskyList)
    }
    test()
  },[])


  const renderInfoCard = useCallback((info: WhiskyInfoProp) => {
    return <InfoCard info={info} key={info.id}/>
  },[])

  
  if(!list) (
    <div>
      Loading
    </div>
  )

  

  return (
    <Suspense fallback={<div>Hi</div>}>
      <Container>
        <Row>
          <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11} >     
          <Container>
            <Row>
              <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} >
        
          <Category/>
          <WhiteSpace height='50'/>
          <Link to='/registerWhisky'>
            <Button paddingVertical={10} paddingHorizontal={10} variant='black'>
              <P size={TypoGraphyCategory.body2} color={Palette.White}>
              + 새로운 위스키 등록
              </P>
              </Button>
          </Link>
              </Col>
              <Col>
          <SearchWhisky/>
          <S.ExploreMainTitleWithOrdering>
            <OrderingBox/>
          </S.ExploreMainTitleWithOrdering>
          <S.ExploreMainCardList>
            {list && list.length > 0 && list.map(renderInfoCard)}
            {/* {[mockWhisky, mockWhisky].map(renderInfoCard)} */}
          </S.ExploreMainCardList>
              </Col>
            </Row>
          </Container>
      
          </Col>
        </Row>
      </Container>
    </Suspense>
  )
}

export default Explore
