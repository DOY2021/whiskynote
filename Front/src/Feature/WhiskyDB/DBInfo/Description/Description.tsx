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
  rating = 89.3, 
  ratingCount = 234,
  name_kor ='글렌모렌지 시그넷',
  name_eng = 'Glen',
  category ='싱글 몰트 위스키',
  distillery = 'Port Ellen',
  bottled = 2010,
  bottler = 'Distillery Bottling',
  cask = 'Refill',
  whisky_detail = '~~',
  id = 1,
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
      <P size={TypoGraphyCategory.title}>{name_kor}</P>
      <WhiteSpace height='10'/>
      <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>{name_eng}</P>
      <WhiteSpace height='15'/>
      <P size={TypoGraphyCategory.subtitle} isInline={true}>*{rating}</P>
      <P size={TypoGraphyCategory.body} color={Palette.Gray600} isInline={true}>점 ({ratingCount})</P>
      <WhiteSpace height='15'/>

      <S.DescriptionLinkWrapper>
        <div onClick={handleReviewClick} style={{display:'flex'}}>
          <img src={PenIcon}/>
          <P size={TypoGraphyCategory.subtitle4} >리뷰 쓰기</P>
        </div>
        <div style={{display:'flex'}}>
          <img src={BookMarkIcon}/>
          <P size={TypoGraphyCategory.subtitle4}>위시리스트</P>
        </div>
      </S.DescriptionLinkWrapper>

      <WhiteSpace height='15'/>

      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>카테고리</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Category</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{category}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>증류소</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Distillery</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{distillery}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>병입 회사</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Bottler</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottler}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>바틀 타입</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Bottling Series</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottler}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>빈티지</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Vintage</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottler}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>병입 날짜</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Bottled</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottler}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>숙성 연수</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Stated Age/Age</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottler}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>캐스크타입</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Cask Type</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottler}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>캐스크넘버</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Cask Number</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottler}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>
      <S.DescriptionItemWrapper>
        <S.DescriptionItemTitle>
          <P size={TypoGraphyCategory.body2} marginRight={15} bold>도수</P>
          <P size={TypoGraphyCategory.body2} color={Palette.Gray600}>Alcohol Strength</P>
        </S.DescriptionItemTitle>
        <P size={TypoGraphyCategory.body2}>{bottler}</P>
      </S.DescriptionItemWrapper>
      <WhiteSpace height='10'/>

    </S.DescriptionWrapper>
  )
}

export default Description
