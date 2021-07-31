import React from 'react'
import { useState } from 'react'
import Palette from '../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../lib/css/TempTypo'
import ImageUpload from '../../shared/ImageUpload/ImageUpload'


import P from '../../shared/P/P'
import HeadLine from '../Review/NewWhiskyReview/HeadLine'
import TextField from '../Review/NewWhiskyReview/TextField'
import ReviewInput, { ReviewType } from '../Review/ReviewInput/ReviewInput'
import S from './RegisterWhisky.styled'

function RegisterWhisky() {
  const [koreanName, setKorean] = useState('');
  const [englishName, setEng] = useState('');
  const [category, setCategory] = useState('');
  const [distillery, setDistillery] = useState('');
  const [bottler, setBottler] = useState('');
  const [series, setSeries] = useState('');
  const [vintage, setVintage] = useState('');
  const [bottled, setBottled] = useState('');
  const [age, setAge] = useState('');
  const [cask, setCask] = useState('');
  const [size, setSize] = useState('');
  const [strength, setStrength] = useState('');
  const [caskNumbers, setCaskNum] = useState('');
  const [bottleNumber,setBottleNum] = useState('');

  return (
    <S.RegisterWhiskyWrapper>
      <P size = {TypoGraphyCategory.title}>새로운 위스키 등록</P>
      <S.RegisterWhiskyRegisterForm>
        <S.RegisterTitleWrapper>
          
          <P  size = {TypoGraphyCategory.body} isInline={true}>위스키명을 입력해주세요</P>
          <P size={TypoGraphyCategory.body} isInline={true} color={Palette.Orange600}>*</P>
          
          <ReviewInput
            title='국문'
            subtitle='글렌모렌지 시그넷' 
            type={ReviewType.text}
            onChange={setKorean}
            value={koreanName}
            placeholder='등록하는 위스키의 정확한 국문 명칭을 입력해주세요.'
          />
          <ReviewInput
            title='영문'
            subtitle='Glenmorangie Signet'
            type={ReviewType.text}
            onChange={setEng}
            value={englishName}
            placeholder="등록하는 위스키의 정확한 영문 명칭을 입력해주세요."
          />
        </S.RegisterTitleWrapper>
        <S.RegisterPhotoWrapper>
          <P  size = {TypoGraphyCategory.body}>위스키 대표 사진을 등록해주세요.</P>
          <P color={Palette.Orange600} size = {TypoGraphyCategory.body2}>상품 이미지 사이즈 이렇게 해주세요.</P>
          <P color={Palette.Orange600} size = {TypoGraphyCategory.body2}>위스키 대표 사진을 등록해주세요.</P>
          <ImageUpload
            maxFileNum={5}
            updateFilesCb={() =>{}}
            label='Whisky'
          />
        </S.RegisterPhotoWrapper>
        <S.RegisterDescriptWrapper>
          <ReviewInput
            title='카테고리'
            subtitle='Category' 
            type={ReviewType.dropdown}
            onClick={setCategory}
            value={category}
          />
          <ReviewInput 
            title='증류소' 
            subtitle='Distillery'
            type={ReviewType.text} 
            onChange={setDistillery}
            value={distillery}
            placeholder='증류소를 입력해주세요.'
          />
          <ReviewInput 
            title='병입 회사'
            subtitle='Bottler'
            type={ReviewType.text}
            onChange={setBottler}
            value={bottler}
            placeholder='병입 회사를 입력해주세요.'
          />
          <ReviewInput 
            title='바틀 시리즈' 
            subtitle='Bottling Series'
            type={ReviewType.text} 
            onChange={setSeries} 
            value={series}
            placeholder='예시) Fine/Rare, Special Releases 2010, Bond House No.1 Collection'
          />
          <ReviewInput
            title='빈티지'
            subtitle='Vintage'
            type={ReviewType.text} 
            onChange={setVintage} 
            value={vintage}
          />
          <ReviewInput
            title='병입 날짜'
            subtitle='Bottled'
            type={ReviewType.text} 
            onChange={setBottled}
            value={bottled}
            placeholder='test'
          />
          <ReviewInput
            title='숙성 연수' 
            subtitle='Stated Age/Age' 
            type={ReviewType.text} 
            onChange={setAge}
            value={age}
            placeholder='숙성 연수를 입력해주세요.'
          />
          <ReviewInput 
            title='캐스크타입' 
            subtitle='Cask Type'
            type={ReviewType.text} 
            onChange={setCask}
            value={cask}
            placeholder='캐스크에 대한 정보를 작성해주세요.'
          />
          <ReviewInput 
            title='알코올 함량'
            subtitle='ABV'
            type={ReviewType.text}
            onChange={setStrength}
            value={strength}
            placeholder='도수를 입력해주세요.'
          />
          <ReviewInput 
            title='용량' 
            subtitle='Size' 
            type={ReviewType.text} 
            onChange={setSize} 
            value={size}
            placeholder='용량을 입력해주세요.'
          />
          <ReviewInput 
            title='캐스크 넘버' 
            subtitle='Cask Numbers' 
            type={ReviewType.text} 
            onChange={setCaskNum} 
            value={caskNumbers}
            placeholder='캐스크 넘버를 작성해주세요.'
          />
          <ReviewInput 
            title='바틀 넘버' 
            subtitle='Number of Bottles' 
            type={ReviewType.text} 
            onChange={setBottleNum} 
            value={bottleNumber}
            placeholder='바틀 넘버를 작성해주세요.'
          />
        </S.RegisterDescriptWrapper>
        <S.MarginWrapper>
          <HeadLine
            inputText={'위스키에 대해 설명해주세요.'}
            isMandatory={true}
          ></HeadLine>
        </S.MarginWrapper>
        <TextField></TextField>

        <S.ButtonsWrapper>
          <S.TempSaveBtn>임시 저장</S.TempSaveBtn>
          <S.RegisterWhiskyBtn>위스키 등록하기</S.RegisterWhiskyBtn>
        </S.ButtonsWrapper>
      </S.RegisterWhiskyRegisterForm>
    </S.RegisterWhiskyWrapper>
  )
}

export default RegisterWhisky
