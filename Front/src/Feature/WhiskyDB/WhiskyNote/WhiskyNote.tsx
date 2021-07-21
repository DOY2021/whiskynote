import React from 'react'
import { TypoGraphyCategory } from '../../../lib/css/TempTypo'
import { MockNoteModel, NoteItemProp, WhiskyNoteProp } from '../../../model/WhiskyNote'
import P from '../../../shared/P/P'
import NoteItem from './NoteItem/NoteItem'
import S from './WhiskyNote.styled'


function WhiskyNote() {
  const mock = MockNoteModel;
  const mockArr = convertToMockArr(mock);



  function convertToMockArr(mock: {[K in WhiskyNoteProp] : NoteItemProp}){
    return Object.entries(mock);
  }

  return (
    <S.WhiskyNoteWrapper>
      <P size={TypoGraphyCategory.title}>위스키 노트</P>
      <S.WhiskyNoteContentWrapper>

        {mockArr.map(item => {
          const NOTE_NAME = 0;
          const NOTE_ITEM = 1;
          return <NoteItem name={item[NOTE_NAME]} item={item[NOTE_ITEM]} key={item[NOTE_NAME]}/>})}
      </S.WhiskyNoteContentWrapper>
    </S.WhiskyNoteWrapper>
  )
}

export default WhiskyNote
