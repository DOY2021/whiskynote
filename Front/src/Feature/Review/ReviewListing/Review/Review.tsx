import React from "react";
import S from './Review.styled';
import WhiskyNoteReview from "./WhiskyNoteReview";

const DUMMY = 'This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.'
function Review() {

  return(
    <>
    {/* <S.Title>리뷰</S.Title>
    <img src="../../../../../assets/CustomIcons/reviewGlass.svg"></img> */}
    <S.ReviewWrapper>
      <S.ReviewText>{DUMMY}</S.ReviewText>
      
    
      <WhiskyNoteReview></WhiskyNoteReview>

    </S.ReviewWrapper>

    </>
  )

 


}

export default Review