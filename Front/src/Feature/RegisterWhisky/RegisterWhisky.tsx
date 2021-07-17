import React from 'react'
import { useState } from 'react'
import Palette from '../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../lib/css/TempTypo'
import Typography from '../../lib/css/Typography'
import ImageUpload from '../../shared/ImageUpload/ImageUpload'


import P from '../../shared/P/P'
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
  const [caskNum, setCaskNum] = useState('');
  const [strength, setStrength] = useState('');

  return (
    <S.RegisterWhiskyWrapper>
      <P size = {TypoGraphyCategory.title}>새로운 위스키 등록</P>
      <S.RegisterWhiskyRegisterForm>
        <S.RegisterTitleWrapper>
          
          <P  size = {TypoGraphyCategory.body} isInline={true}>위스키명을 입력해주세요</P>
          <P size={TypoGraphyCategory.body} isInline={true} color={Palette.Orange600}>*</P>
          
          <ReviewInput title='국문' subtitle='글렌모렌지 시그넷' type={ReviewType.text} onChange={setKorean} value={koreanName}/>
          <ReviewInput title='영문' subtitle='Glenmorangie Signet' type={ReviewType.text} onChange={setEng} value={englishName}/>
        </S.RegisterTitleWrapper>
        <S.RegisterPhotoWrapper>
          <P color={Palette.Orange600} size = {TypoGraphyCategory.body}>위스키 대표 사진을 등록해주세요.</P>
          <P color={Palette.Orange600} size = {TypoGraphyCategory.body2}>상품 이미지 사이즈 이렇게 해주세요.</P>
          <P color={Palette.Orange600} size = {TypoGraphyCategory.body2}>위스키 대표 사진을 등록해주세요.</P>
          <ImageUpload label='Whisky'/>
        </S.RegisterPhotoWrapper>
        <S.RegisterDescriptWrapper>
          <ReviewInput title='카테고리' subtitle='Category' type={ReviewType.dropdown} onClick={setCategory} value={category}/>
          <ReviewInput title='증류소' subtitle='Distillery' type={ReviewType.text} onChange={setDistillery} value={distillery}/>
          <ReviewInput title='병입 회사' subtitle='Bottler' type={ReviewType.text} onChange={setBottler} value={bottler}/>
          <ReviewInput title='바틀 타입' subtitle='Bottling Series' type={ReviewType.text} onChange={setSeries} value={series}/>
          <ReviewInput title='빈티지' subtitle='Vintage' type={ReviewType.text} onChange={setVintage} value={vintage}/>
          <ReviewInput title='병입 날짜' subtitle='Bottled' type={ReviewType.text} onChange={setBottled} value={bottled}/>
          <ReviewInput title='숙성 연수' subtitle='Stated Age/Age' type={ReviewType.text} onChange={setAge} value={age}/>
          <ReviewInput title='캐스크타입' subtitle='Cask Type' type={ReviewType.text} onChange={setCask} value={cask}/>
          <ReviewInput title='캐스크넘버' subtitle='Cask Number' type={ReviewType.text} onChange={setCaskNum} value={caskNum}/>
          <ReviewInput title='도수' subtitle='Alcohol Strength' type={ReviewType.text} onChange={setStrength} value={strength}/>
        </S.RegisterDescriptWrapper>
      </S.RegisterWhiskyRegisterForm>
    </S.RegisterWhiskyWrapper>
  )
}

export default RegisterWhisky
