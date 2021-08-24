import React, { useState } from "react";
import HashTag from "../HashTag/HashTag";
import WhiskyNoteBtn from "../WhiskyNoteBtn/WhiskyNoteBtn";
import S from './WhiskyNote.styled';
function WhiskyNote(props: {label: string, handleTagSelection: (e) => void, currentClicked: string, hashTagList: [], handleTagDelete: (k:any) => void, data_cy: string}) {


  return (
    <div data-cy={props.data_cy}>
    <S.Label>{props.label}</S.Label>
    <S.HashTagList>
      {props.hashTagList && props.hashTagList.map((tag,index) => (<HashTag key={index} name={tag} handleTagDelete={props.handleTagDelete}></HashTag>))}
    </S.HashTagList>
    <S.ButtonWrapper>
      <WhiskyNoteBtn text='곡물' onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text='나무' onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text='꽃' onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text='과일' onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text='와인' onClick={props.handleTagSelection}></WhiskyNoteBtn>
      <WhiskyNoteBtn text='유황' onClick={props.handleTagSelection}></WhiskyNoteBtn>
    </S.ButtonWrapper>

 {  props.currentClicked == '곡물' && 
    <S.ButtonWrapper>
      <WhiskyNoteBtn text="홉" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="맥아" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="익힌야채" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="익힌곡물" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="효모" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
    </S.ButtonWrapper>
}


{  props.currentClicked == '나무' &&
    <S.ButtonWrapper>
      <WhiskyNoteBtn text="자연목" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="가공목" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="바닐라" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="토스트" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
    </S.ButtonWrapper>
}


{  props.currentClicked == '꽃' &&
    <S.ButtonWrapper>
      <WhiskyNoteBtn text="향수" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="화초" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="풀잎" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="건초" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
    </S.ButtonWrapper>
}

{  props.currentClicked == '과일' &&
    <S.ButtonWrapper>
      <WhiskyNoteBtn text="시트러스" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="생과일" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="익힌과일" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="말린과일" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="아세톤" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
    </S.ButtonWrapper>
}
{  props.currentClicked == '와인' &&
    <S.ButtonWrapper>
      <WhiskyNoteBtn text="셰리" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="견과류" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="초콜릿" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="오일" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
    </S.ButtonWrapper>
}
{  props.currentClicked == '유황' &&
    <S.ButtonWrapper>
      <WhiskyNoteBtn text="석탄" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="젖은흙" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="모래" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="고무" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
    </S.ButtonWrapper>
}

    <S.ButtonWrapper>
    <WhiskyNoteBtn text='피트' onClick={props.handleTagSelection}></WhiskyNoteBtn>
      <WhiskyNoteBtn text='후류' onClick={props.handleTagSelection}></WhiskyNoteBtn>
      <div style={{width:'608px'}}></div>
    </S.ButtonWrapper>

    {  props.currentClicked == '피트' &&
    <S.ButtonWrapper>
      <WhiskyNoteBtn text="소독약" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="이끼" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="해산물" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="훈연향" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
    </S.ButtonWrapper>
}
{  props.currentClicked == '후류' &&
    <S.ButtonWrapper>
      <WhiskyNoteBtn text="허니" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="플라스틱" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="체취" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="가죽" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
      <WhiskyNoteBtn text="담배" low={true} onClick={props.handleTagSelection} ></WhiskyNoteBtn>
    </S.ButtonWrapper>
}

    </div>
  )
}

export default WhiskyNote