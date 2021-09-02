import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Palette from '../../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../../lib/css/TempTypo'
import { MockNoteModel, NoteItemProp, WhiskyNoteCategory, WhiskyNoteProp } from '../../../model/WhiskyNote'
import P from '../../../shared/P/P'
import WhiteSpace from '../../../shared/WhiteSpace/WhiteSpace'
import NoteItem from './NoteItem/NoteItem'
import S from './WhiskyNote.styled'


function WhiskyNote() {
  const mock = MockNoteModel;
  const mockArr = convertToMockArr(mock);



  function convertToMockArr(mock: {[K in WhiskyNoteCategory] : NoteItemProp}){
    return Object.entries(mock);
  }

  return (
    <Container>
      <P color={Palette.SemiBlack} size={TypoGraphyCategory.subtitle}>위스키 노트</P>
      <WhiteSpace height='20'/>
      <Row>
        {mockArr.map(item => {
          const NOTE_NAME = 0;
          const NOTE_ITEM = 1;
          return (
          <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
            <NoteItem name={item[NOTE_NAME]} item={item[NOTE_ITEM]} key={item[NOTE_NAME]}/>
          </Col>
          )})
        }
      </Row>
    </Container>
        )
}

export default WhiskyNote
