import React from 'react'
import { useCallback } from 'react'
import { useHistory } from 'react-router'
import Palette from '../../../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../../../lib/css/TempTypo'
import { WhiskyInfoProp } from '../../../../model/Whisky'
import { Tags } from '../../../../model/WhiskyNote'
import TagService from '../../../../Services/TagService'
import P from '../../../../shared/P/P'
import WhiteSpace from '../../../../shared/WhiteSpace/WhiteSpace'
import Styled from './InfoCard.styled'

interface InfoCardProps {
  info : WhiskyInfoProp
}

function InfoCard({
  info
}: InfoCardProps) {

  const history = useHistory();

  //TagList에서 받아온 것 중 Nose/Taste/Finish 별로 1위인 태그를 가져옵니다.
  const tags = Object.entries(info.tags).map( tag => Object.keys(tag[1])[0])

  const handleClick = () => {
    history.push(`/whiskyDB/${info.id}`)
  }

  const renderTag = useCallback((item: Tags) => {
    const tag = '셰리'
    const tagCategory = TagService.getTagCategory(item);
    const tagColor = TagService.getTagColor(tagCategory);

    return (
      <Styled.InfoCardDescTag key={item} color={tagColor}>
        {item}
      </Styled.InfoCardDescTag>
    )
  },[])

  return (
    <Styled.InfoCardWrapper onClick={handleClick}>
      <Styled.InfoCardImg src={info.whisky_image[0].image}/>
      <Styled.InfoCardDescWrapper>
        <P size={TypoGraphyCategory.subtitle2} bold>{info.name_kor}</P>
        <WhiteSpace height='4'/>
        <P size={TypoGraphyCategory.body2} color={Palette.WhiskyGray} bold>{info.name_eng}</P>
        <WhiteSpace height='10'/>
        <Styled.InfoCardDescTagWrapper>
          {tags.map(renderTag)}
        </Styled.InfoCardDescTagWrapper>
        <WhiteSpace height='10'/>
        <Styled.InfoCardDetailWrapper>
          <P size={TypoGraphyCategory.body2} color={Palette.WhiskyGray} >{info.whisky_detail}</P>
        </Styled.InfoCardDetailWrapper>
        <WhiteSpace height='60'/>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <P isInline size={TypoGraphyCategory.subtitle}>* {info.whisky_ratings}</P>
        <P isInline color={Palette.WhiskyGray}>점 ({info.rating_counts})</P>
        </div>
      </Styled.InfoCardDescWrapper>
    </Styled.InfoCardWrapper>
  )
}

export default InfoCard
