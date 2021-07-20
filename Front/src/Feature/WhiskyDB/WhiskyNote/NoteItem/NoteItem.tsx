import React from 'react'
import { useCallback } from 'react'
import TagService from '../../../../Services/TagService'
import P from '../../../../shared/P/P'
import S from './NoteItem.styled'
import chocolate from '../../../../../assets/TagIcon/chocolate.svg'

interface NoteItemProp{
  name: {
    first: string;
    second: string;
    third: string;
  }
}


interface TestProp {
  icon: string;
  name: string;
  percentage: string;
}

function NoteItem(list: NoteItemProp) {
  const test = '자연목'
  const testCategory = TagService.getTagCategory(test);
  const testCategoryColor = TagService.getTagColor(testCategory);

  console.log(test,testCategory,testCategoryColor)

  return (
    <S.NoteItemWrapper>
      <P>Nose</P>
      <S.NoteItemContentWrapper>
        <S.NoteItemContentIcon src={chocolate}/>
        <S.NoteItemContentText>

        </S.NoteItemContentText>
      </S.NoteItemContentWrapper>
    </S.NoteItemWrapper>
  )
}

export default NoteItem
