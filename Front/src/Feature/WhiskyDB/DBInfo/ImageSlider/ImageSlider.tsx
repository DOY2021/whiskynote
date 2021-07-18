import React, { useRef } from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import S from './ImageSlider.styled'

function ImageSlider() {
  const imgIdx = useRef<number>(0);

  const handleIdx = useCallback((idx:number) => {
    imgIdx.current = idx;
  },[imgIdx])

  const renderDot = (_,idx) => {
    const handleDotClick = () => handleIdx(idx);

    const selectedDot = imgIdx === idx ? true : false;

    return <S.ImageSliderDot onClick={handleDotClick} isSelected = {selectedDot}/>
  }

  return (
    <S.ImageSliderWrapper position={imgIdx}>
      <S.ImageSliderItem/>
      <S.ImageSliderItem/>
      <S.ImageSliderItem/>
      <S.ImageSliderDotWrapper>
        {new Array(3).fill(0).map(renderDot)}
      </S.ImageSliderDotWrapper>
    </S.ImageSliderWrapper>
  )
}

export default ImageSlider
