import React from 'react'
import Palette from '../../../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../../../lib/css/TempTypo'
import { WhiskyInfoProp } from '../../../../model/Whisky'
import P from '../../../../shared/P/P'
import S from './Description.styled'
import PenIcon from '../../../../../assets/CustomIcons/pen.svg'
import BookMarkIcon from '../../../../../assets/CustomIcons/bookmark.svg'
import WhiteSpace from '../../../../shared/WhiteSpace/WhiteSpace'
import { useHistory } from 'react-router'


function Description({
  whisky_ratings= 83.5,
  rating_counts= 243,
  name_kor ='글렌모렌지 시그넷',
  name_eng = 'Glen',
  category ='싱글 몰트 위스키',
  distillery = 'Port Ellen',
  bottled = 2010,
  bottler = 'Distillery Bottling',
  cask = 'Refill',
  whisky_detail = '~~',
  id = 1,
  age= 30,
  vintage =1979,
  casknumber = 3000,
  alcohol = 54,

}: WhiskyInfoProp) {

  const history = useHistory();

  const handleReviewClick = () => {
    //TODO: get whisky_pk
    history.push(`/newWhiskyReview/${id}`)
  }

  return (
    <S.DescriptionWrapper>
      <P color={Palette.SemiBlack} size={TypoGraphyCategory.title} bold>{name_kor}</P>
      <WhiteSpace height='10'/>
      <P size={TypoGraphyCategory.subtitle3} color={Palette.WhiskyGray}>{name_eng}</P>
      <WhiteSpace height='24'/>
      <S.RatingWrapper>
      <P color={Palette.SemiBlack} size={TypoGraphyCategory.subtitle}>*{whisky_ratings}</P>
      <P size={TypoGraphyCategory.body} color={Palette.WhiskyGray} >점 ({rating_counts})</P>
      </S.RatingWrapper>
      <WhiteSpace height='10'/>

      <S.DescriptionLinkWrapper>
        <div onClick={handleReviewClick} style={{display:'flex', cursor: 'pointer'}}>
          <PenIcon/>
          <P>리뷰 쓰기</P>
        </div>
        <div style={{display:'flex', marginLeft: '24px', cursor: 'pointer'}}>
          <BookMarkIcon/>
          <P>위시리스트</P>
        </div>
      </S.DescriptionLinkWrapper>

      <WhiteSpace height='50'/>

      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>카테고리</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Category</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{category}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>증류소</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Distillery</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{distillery}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>병입 회사</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Bottler</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottler}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>바틀 타입</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Bottling Series</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottled}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>빈티지</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Vintage</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{vintage}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>병입 날짜</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Bottled</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottled}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>숙성 연수</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Stated Age/Age</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{age}년</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>캐스크타입</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Cask Type</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{cask}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>캐스크넘버</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Cask Number</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{casknumber}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>도수</P>
          <P size={TypoGraphyCategory.body3} color={Palette.Gray600}>Alcohol Strength</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{alcohol}도</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>

    </S.DescriptionWrapper>
  )
}

export default Description
