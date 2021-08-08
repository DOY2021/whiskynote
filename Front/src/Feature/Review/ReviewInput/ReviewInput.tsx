import React from 'react'
import { useState } from 'react';
import { TypoGraphyCategory } from '../../../lib/css/TempTypo';
import DropDown from '../../../shared/DropDown/DropDown'
import P from '../../../shared/P/P';
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
  placeholder?: string;
  categoryList?: string[];
}

function ReviewInput({
  title,
  subtitle= '',
  type = ReviewType.text,
  onChange,
  onClick,
  placeholder,
  categoryList,
  value
}:ReviewInputProp) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
    if(e.target === undefined) return;
    if(!onChange) return;
    onChange(e.target.value)
  }

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    if(type !== ReviewType.dropdown) return;
    setOpen(!isOpen);
  }

  const handleDropDownClick = (item:any) => {
    if(!onClick)return;
    onClick(item)
    handleOpen()
  }

  return (
    <Styled.ReviewInputWrapper>
      <Styled.ReviewTitleWrapper hasSubtitle={subtitle ? true : false}>
        <Styled.ReviewInputTitle>{title}</Styled.ReviewInputTitle>
        {subtitle &&  <Styled.ReviewInputSubTitle>{subtitle}</Styled.ReviewInputSubTitle>}
      </Styled.ReviewTitleWrapper>
      <Styled.ReviewContentWrapper onClick={handleOpen}>
        {type === ReviewType.text 
          ? <Styled.ReviewContentText placeholder={placeholder} onChange={handleInput} value={value}/>
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          : isOpen === true
            ? <DropDown onClick={handleDropDownClick}> 
              {categoryList}  
            </DropDown>
            : <P bold size={TypoGraphyCategory.body2}>{value}</P>
        }
      </Styled.ReviewContentWrapper>
    </Styled.ReviewInputWrapper>
  )
}

export default ReviewInput
