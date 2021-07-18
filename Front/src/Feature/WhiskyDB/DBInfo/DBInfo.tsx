import React from 'react'
import Description from './Description/Description'
import ImageSlider from './ImageSlider/ImageSlider'
import S from './DBInfo.styled'

function DBInfo() {
  return (
    <S.DBInfoDetailWrapper>
      <ImageSlider/>
      <Description/>
    </S.DBInfoDetailWrapper>
  )
}

export default DBInfo
