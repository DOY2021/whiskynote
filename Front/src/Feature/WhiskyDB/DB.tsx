import React from 'react';
import DBInfo from './DBInfo/DBInfo';
import Descript from './Descript/Descript';
import WhiskyNote from './WhiskyNote/WhiskyNote';
import S from './DB.styled';
import { Col, Container, Row } from 'react-bootstrap';
import ReviewList from '../Review/ReviewListing/ReviewList/ReviewList';
import WhiteSpace from '../../shared/WhiteSpace/WhiteSpace';

function DB() {
  return (
    <Container>
      <Row>
        <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
          <S.DBWrapper>
            <WhiteSpace height='40'/>
            <DBInfo />
            <WhiteSpace height='70'/>
            <WhiskyNote />
            <WhiteSpace height='70'/>
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
