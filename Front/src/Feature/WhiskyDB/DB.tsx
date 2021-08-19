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

export default DB;
