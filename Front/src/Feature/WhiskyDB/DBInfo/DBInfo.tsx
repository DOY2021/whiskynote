import React, { useEffect, useState } from 'react'
import Description from './Description/Description'
import ImageSlider from './ImageSlider/ImageSlider'
import S from './DBInfo.styled'

import useWhiskyDB from '../../../hook/swr/useWhiskyDB'
import { mockWhisky, WhiskyInfoProp } from '../../../model/Whisky'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { client } from '../../../api/client'

function DBInfo() {


  // const {data, error, isLoading} = useWhiskyDB();

  const whisky_id = useParams()

  const [tmpData, setData] = useState<WhiskyInfoProp>()

  const getData = async() =>  await client.get(`/api/whisky/${whisky_id['id']}/`)

  useEffect(() => {
    const test = async() => {
      const data: unknown  = await getData() 
      setData(data as WhiskyInfoProp)
    }
    test()
  },[])

  
  
  // if(isLoading) (
  //   <div>
  //     Loading
  //   </div>
  // );

  return (
    <Container fluid>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}/>
        <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
        <ImageSlider img={tmpData?.whisky_image[0].image || 'https://source.unsplash.com/random'}/>
        </Col>
        <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
        {/* <Description {...mockWhisky}/> */}
        {tmpData && <Description {...tmpData}/>}
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}/>
      </Row>
    </Container>
    )
}

export default DBInfo
