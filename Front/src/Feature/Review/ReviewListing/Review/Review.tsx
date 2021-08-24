import React from 'react';
import S from './Review.styled';
import ReviewImageViewer from './ReviewImageViewer/ReviewImageViewer';
import WhiskyNoteReview from './WhiskyNoteReview';
import Glass from '../../../../../assets/CustomIcons/reviewGlass.svg';

const DUMMY =
  'This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.';
function Review() {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <Glass
          style={{
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            marginBottom: '4px',
          }}
        />
        <S.UserName>술고래</S.UserName>
      </S.IconWrapper>
      <S.ReviewWrapper>
        <S.ScoreWrapper>
          <S.ReviewScore>72.3</S.ReviewScore>
          <S.ReviewScoreText>점/100</S.ReviewScoreText>
        </S.ScoreWrapper>

        <ReviewImageViewer files={[]}></ReviewImageViewer>
        <S.ReviewText>{DUMMY}</S.ReviewText>

        <WhiskyNoteReview></WhiskyNoteReview>
        <S.Date>2020년 3월 19일</S.Date>
        <S.BottomWrapper>
          <S.LikeWrapper>
            <S.Like>추천</S.Like>
            <S.LikeNum>23</S.LikeNum>
          </S.LikeWrapper>
          <S.LikeBtn>이 리뷰가 도움이 돼요</S.LikeBtn>
        </S.BottomWrapper>
      </S.ReviewWrapper>
    </S.Wrapper>
  );
}

export default Review;
