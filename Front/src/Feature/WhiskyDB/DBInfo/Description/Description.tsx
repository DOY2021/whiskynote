import React, { useCallback } from 'react'
import Palette from '../../../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../../../lib/css/TempTypo'
import { WhiskyDetailProp } from '../../../../model/Whisky'
import P from '../../../../shared/P/P'
import S from './Description.styled'

type DescriptionProp = Omit<WhiskyDetailProp, 'photo'>

function Description({
  rating = 89.3, 
  ratingCount = 234,
  koreanName ='글렌모렌지 시그넷',
  englishName = 'Glen',
  category ='싱글 몰트 위스키',
  distillery = 'Port Ellen',
  bottled = '2010',
  bottler = 'Distillery Bottling',
  bottlingSeries = 'Diageo',
  vintage ='1978',
  statedAge = '31년',
  caskType = 'Refill',
  caskNum = '3000',
  strength = '54도',
  description = '~~'

}: DescriptionProp) {

  return (
    <S.DescriptionWrapper>
      <P size={TypoGraphyCategory.title}>{koreanName}</P>
      <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>{englishName}</P>
      <P size={TypoGraphyCategory.subtitle} isInline={true}>*{rating}</P>
      <P size={TypoGraphyCategory.body} color={Palette.Gray600} isInline={true}>점 ({ratingCount})</P>

      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body3}>카테고리</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Category</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body3}>{category}</P>
      </S.DescriptionItemWrapper>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body3}>증류소</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Distillery</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body3}>{distillery}</P>
      </S.DescriptionItemWrapper>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body3}>병입 회사</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Bottler</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body3}>{bottler}</P>
      </S.DescriptionItemWrapper>

    </S.DescriptionWrapper>
  )
}

export default Description
