import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import Palette from '../../../lib/css/Pallete';
import { TypoGraphyCategory } from '../../../lib/css/TempTypo';
import Button from '../../../shared/Button/Button';
import P from '../../../shared/P/P'
import WhiteSpace from '../../../shared/WhiteSpace/WhiteSpace';
import S from './AfterRegister.styled'

interface ParamProps {
  name: string;
}

function AfterRegister() {
  const param = useParams<ParamProps>();
  
  const whiskyName = param.name

  return (
    <Container>

      <Row xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}/>
        <Col xs={10} sm={10} md={10} lg={10} xl={10} xxl={10}>
    <S.AfterRegisterLayout>
      <S.AfterRegisterWrapper>
        <P size={TypoGraphyCategory.title} color={Palette.SemiBlack}>{whiskyName}을(를) 첫번째로 등록하셨어요!</P>
        <WhiteSpace height='10'/>
        <P pre='pre' size={TypoGraphyCategory.body}>{`등록하신 위스키는 영업일 기준 최대 3일 이내에 검수 후\n위스키노트에 반영돼요.`}</P>
        <WhiteSpace height='65'/>
        <S.AfterRegisterBtnWrapper>
          <Link to='/'>
          <Button paddingHorizontal={31.5} paddingVertical={16} border={Palette.Black} variant='grayscale' color={Palette.Black}>
            <P>
              메인 화면으로 이동
            </P>
          </Button>
          </Link>
          <Link to='/registerWhisky'>
          <Button paddingHorizontal={31.5} paddingVertical={16} border={Palette.Black} variant='black' color={Palette.Black}>
            <P>
              새로운 위스키 등록
            </P>
          </Button>
          </Link>
        </S.AfterRegisterBtnWrapper>
      </S.AfterRegisterWrapper>
    </S.AfterRegisterLayout>
        </Col>
      </Row>
    </Container>
  )
}

export default AfterRegister
