import React from 'react'
import { useCallback } from 'react'
import TagService from '../../../../Services/TagService'
import P from '../../../../shared/P/P'
import S from './NoteItem.styled'
import chocolate from '../../../../../assets/TagIcon/chocolate.svg'

interface NoteItemProp{
  item : {
    [K : string] : string;
  },
  name: string;
}

function NoteItem({
  item,
  name
}: NoteItemProp) {

  const itemArr = convertToMockArr(item);

  function convertToMockArr(mock: any){
    return Object.entries(mock);
  }

  const renderItemContent = useCallback((tag,idx) => {
    const TAG_NAME = 0;
    const TAG_PERCENTAGE = 1;

    const isFirst = idx === 0 ? true : false;

    return(
      <S.NoteItemContentWrapper isFirst = {isFirst} category = {TagService.getTagCategory(tag[TAG_NAME])} key={tag[TAG_NAME]}>
        <S.NoteItemContentIcon src={chocolate}/>
        <S.NoteItemContentText isFirst={isFirst}>
          <P>{tag[TAG_NAME]}</P>
          <P>{tag[TAG_PERCENTAGE]}</P>
        </S.NoteItemContentText>
      </S.NoteItemContentWrapper>
    )
  },[])
  
  return (
    <S.NoteItemWrapper>
      <P>{name}</P>
      {itemArr.map(renderItemContent)}
    </S.NoteItemWrapper>
  )
}

export default NoteItem