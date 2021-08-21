import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useWhiskyDB from '../../../hook/swr/useWhiskyDB'
import Palette from '../../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../../lib/css/TempTypo'
import { mockWhisky } from '../../../model/Whisky'
import P from '../../../shared/P/P'
import S from './Descript.styled'

function Descript() {
  const {data, isLoading} = useWhiskyDB();

  if(isLoading) (
    <div>
      Loading
    </div>
  )
    
  return (
    <Container>
      <Row>
        <Col>
      <P color={Palette.SemiBlack} size={TypoGraphyCategory.title}>정보</P>
      <S.DescriptText>
        {/* {data?.whisky_detail} */}
        {mockWhisky.whisky_detail}
      </S.DescriptText>
        </Col>

      </Row>
    </Container>
  )
}

export default Descript
