import React from 'react'
import DropDown from '../../../shared/DropDown/DropDown'
import Styled from './ReviewInput.styled'

export enum ReviewType  {
  dropdown = 'DROPDOWN',
  text = 'TEXT',
}

interface ReviewInputProp {
  title: string;
  subtitle?: string;
  type?: ReviewType;
  onChange?: (v:any) => void,
  onClick?: (v:any) => void,
  value?: string;
}

function ReviewInput({
  title,
  subtitle= '',
  type = ReviewType.text,
  onChange,
  onClick,
  value
}:ReviewInputProp) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
    if(e.target === undefined) return;
    if(!onChange) return;
    onChange(e.target.value)
  }

  return (
    <Styled.ReviewInputWrapper>
      <Styled.ReviewTitleWrapper hasSubtitle={subtitle ? true : false}>
        <Styled.ReviewInputTitle>{title}</Styled.ReviewInputTitle>
        {subtitle &&  <Styled.ReviewInputSubTitle>{subtitle}</Styled.ReviewInputSubTitle>}
      </Styled.ReviewTitleWrapper>
      <Styled.ReviewContentWrapper>
        {type === ReviewType.text 
          ? <Styled.ReviewContentText placeholder='카테고리를 입력하세요' onChange={handleInput} value={value}/>
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          : <DropDown onClick={onClick || (() =>{})}> 
            {new Array(10).fill(0).map((_,idx) => idx)}  
          </DropDown>}
      </Styled.ReviewContentWrapper>
    </Styled.ReviewInputWrapper>
  )
}

export default ReviewInput
