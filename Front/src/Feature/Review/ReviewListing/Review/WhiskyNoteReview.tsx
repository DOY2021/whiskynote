import React from "react";
import styled from "styled-components";

const ReviewWrapper = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:16px;
`
const CoulmnWrapper = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom:4px;
`
const Column = styled.div`
  background-color: #D9D9D2;
  color: #272624;
  align-items:center;
  justify-content:center;
  font-size: 15px;
  height: 35px;
  display:flex;
  margin-right:4px;
  width:60px;
`

const Score = styled.div`
  background-color: #E5E5DF;
  color: #272624;
  align-items:center;
  justify-content:center;
  font-size: 15px;
  height: 35px;
  display:flex;
  margin-right:4px;
  width:60px;
`
const Tags = styled.div`
  background-color: #E5E5DF;
  color: #6B675E;
  align-items:center;
  font-size: 15px;
  height: 35px;
  display:flex;
  width: 100%;
  padding-left: 10px;
`
function WhiskyNoteReview(props: {whiskyNote?: any[]}) {

  return(
    <ReviewWrapper>
    <CoulmnWrapper>
    <Column>Nose</Column>
    <Score>83.4</Score>
    <Tags>나무, 초콜릿, 해산물</Tags>
    </CoulmnWrapper>
    <CoulmnWrapper>
    <Column>Taste</Column>
    <Score>83.4</Score>
    <Tags>시트러스, 생과일</Tags>
    </CoulmnWrapper>
    <CoulmnWrapper>
    <Column>Finish</Column>
    <Score>83.4</Score>
    <Tags>석탄, 맥아</Tags>
    </CoulmnWrapper>
    </ReviewWrapper>
  )

}

export default WhiskyNoteReview;