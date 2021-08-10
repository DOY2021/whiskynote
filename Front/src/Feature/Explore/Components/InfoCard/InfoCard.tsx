import React from 'react'
import { useCallback } from 'react'
import { useHistory } from 'react-router'
import Palette from '../../../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../../../lib/css/TempTypo'
import TagService from '../../../../Services/TagService'
import P from '../../../../shared/P/P'
import WhiteSpace from '../../../../shared/WhiteSpace/WhiteSpace'
import Styled from './InfoCard.styled'

function InfoCard({
  img = 'https://source.unsplash.com/random',
  koName = '글렌모렌지 시그넷',
  engName = 'Glen',
  tagList = [1,2,3],
  descript = '글렌모렌지 시그넷(Glenmorangie Signet)은 글렌모렌지 증류소가 창조한 가장 훌륭한 위스키 중 하나입니다. 시그넷은 독특하고 진귀한 2가지 타입의 맥아로 만들어진 두 종류의 위스키 조합으로 만들어졌...',
  ratedUserNum = 234,
  ratingScore = 89.3,
  id = 1
}:InfoCardProps) {

  const history = useHistory();

  const handleClick = () => {
    history.push(`/whiskyDB/${id}`)
  }

  const renderTag = useCallback((item: number) => {
    const tag = '셰리'
    const tagCategory = TagService.getTagCategory(tag);
    const tagColor = TagService.getTagColor(tagCategory);

    return (
      <Styled.InfoCardDescTag key={item} color={tagColor}>
        {tag}
      </Styled.InfoCardDescTag>
    )
  },[])

  return (
    <Styled.InfoCardWrapper onClick={handleClick}>
      <Styled.InfoCardImg src={img}/>
      <Styled.InfoCardDescWrapper>
        <P size={TypoGraphyCategory.subtitle} bold>{koName}</P>
        <WhiteSpace height='10'/>
        <P size={TypoGraphyCategory.body2} color={Palette.Gray700} bold>{engName}</P>
        <WhiteSpace height='10'/>
        <Styled.InfoCardDescTagWrapper>
          {tagList.map(renderTag)}
        </Styled.InfoCardDescTagWrapper>
        <WhiteSpace height='10'/>
        <P size={TypoGraphyCategory.body2} color={Palette.Gray700} >{descript}</P>
        <WhiteSpace height='40'/>
        <P isInline size={TypoGraphyCategory.subtitle}>* {ratingScore}</P>
        <P isInline color={Palette.Gray700}>점 ({ratedUserNum})</P>
      </Styled.InfoCardDescWrapper>
    </Styled.InfoCardWrapper>
  )
}

export default InfoCard
