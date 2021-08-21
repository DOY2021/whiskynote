import React from 'react'
import Description from './Description/Description'
import ImageSlider from './ImageSlider/ImageSlider'
import S from './DBInfo.styled'

import useWhiskyDB from '../../../hook/swr/useWhiskyDB'
import { mockWhisky } from '../../../model/Whisky'
import { Col, Container, Row } from 'react-bootstrap'

function DBInfo() {


  const {data, error, isLoading} = useWhiskyDB();
  
  if(isLoading) (
    <div>
      Loading
    </div>
  );

  return (
    <Container>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
        <ImageSlider />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
        <Description {...mockWhisky}/>
        </Col>
        {/* {data && <Description {...data}/>} */}
      </Row>
    </Container>
    )
}

export default DBInfo
