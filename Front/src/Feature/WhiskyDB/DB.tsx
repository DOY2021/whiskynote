import React from 'react';
import DBInfo from './DBInfo/DBInfo';
import Descript from './Descript/Descript';
import WhiskyNote from './WhiskyNote/WhiskyNote';
import S from './DB.styled';
import { mockDB } from '../../api/whiskyDB';
import { Col, Container, Row } from 'react-bootstrap';
import ReviewList from '../Review/ReviewListing/ReviewList/ReviewList';

function DB() {
  const result = mockDB;
  return (
    <Container>
      <Row>
        <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
          <S.DBWrapper>
            <DBInfo />
            <WhiskyNote />
            <Descript />
          </S.DBWrapper>
          <S.Line></S.Line>
          <ReviewList></ReviewList>
        </Col>
      </Row>
    </Container>
  );
}

<<<<<<< HEAD
export default DB;
=======
export default DB

//TODO
//찾으시는 위스키가 있나요?? 부분 만들기
// 로그인은 주말에 싱크를 좀 맞춰봐야할듯 + 스피너 돌리는거랑 isFetching 만들어주기 + 필요하면 페이지네이션도?
>>>>>>> 03637fb (Main/Info swr 작성)
