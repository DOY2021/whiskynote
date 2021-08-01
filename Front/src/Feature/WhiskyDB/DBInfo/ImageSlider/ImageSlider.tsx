import React, { useRef } from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import S from './ImageSlider.styled'

function ImageSlider() {
  const [imgIdx,setIdx] = useState(0);

  const renderDot = (_,idx) => {
    const handleDotClick = () => {
      setIdx(idx)
    };

    const selectedDot = imgIdx === idx ? true : false;
    console.log(selectedDot)

    return <S.ImageSliderDot onClick={handleDotClick} isSelected = {selectedDot} key={idx}/>
  }

  return (
    <S.ImageSliderBox>
      <S.ImageSliderWrapper position={imgIdx}>
        <S.ImageSliderItem src='https://source.unsplash.com/random'/>
        <S.ImageSliderItem src='https://source.unsplash.com/daily'/>
        <S.ImageSliderItem src= 'https://source.unsplash.com/random'/>
      </S.ImageSliderWrapper>
      <S.ImageSliderDotWrapper>
        {new Array(3).fill(0).map(renderDot)}
      </S.ImageSliderDotWrapper>
    </S.ImageSliderBox>
  )
}

export default ImageSlider
