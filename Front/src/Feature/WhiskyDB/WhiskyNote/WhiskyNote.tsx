import React from 'react'
import { TypoGraphyCategory } from '../../../lib/css/TempTypo'
import P from '../../../shared/P/P'
import NoteItem from './NoteItem/NoteItem'
import S from './WhiskyNote.styled'


function WhiskyNote() {
  return (
    <S.WhiskyNoteWrapper>
      <P size={TypoGraphyCategory.title}>위스키 노트</P>
      <NoteItem/>
    </S.WhiskyNoteWrapper>
  )
}

export default WhiskyNote
