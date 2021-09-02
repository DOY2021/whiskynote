import React from "react";
import S from './Slider.styled';
function Slider(props: {label: string, score: any, name:string, handleChange: (e) => void, data_cy: string}) {

  return(
    <>
    <S.SliderLabel>{props.label}</S.SliderLabel>
    <S.SliderWrapper>
    <S.InputRange name={props.name} data-cy={props.data_cy} type="range" min="0" max="100" value={props.score} onChange={props.handleChange}>
    </S.InputRange>
    <S.Score>{props.score}</S.Score>
    <S.ScoreDefaultText>점/100</S.ScoreDefaultText>
    </S.SliderWrapper>
    </>
  )
}

export default Slider;