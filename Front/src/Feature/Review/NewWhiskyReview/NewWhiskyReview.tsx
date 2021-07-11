import React from 'react'
import Palette from '../../../css/Palette';
import P from '../../../shared/P/P'
import ReviewInput , { ReviewType }from '../ReviewInput/ReviewInput'
import SearchWhisky from '../SearchWhisky/SearchWhisky';
import S from './NewWhiskyReview.styled';
function NewWhiskyReview() {
  
  

  return(<S.NewWhiskyReviewWrapper>
    
    <SearchWhisky searchText={''}></SearchWhisky>
    {/* <ReviewInput title='a' subtitle='위스키명으로 검색하기'  type={ReviewType.text}/> */}
    
  </S.NewWhiskyReviewWrapper>)
}

export default NewWhiskyReview;