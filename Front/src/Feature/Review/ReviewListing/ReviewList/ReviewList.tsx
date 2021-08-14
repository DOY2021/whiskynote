import React from 'react';
import S from './ReviewList.styled';
import { useState } from 'react';
import Review from '../Review/Review';
import PenIcon from '../../../../../assets/CustomIcons/pen.svg';
import P from '../../../../shared/P/P';
import { useHistory } from 'react-router';

function ReviewList(props: {
  whisky_ratings?: number;
  rating_counts?: number;
}) {

  const history = useHistory();

  const handleReviewClick = () => {
    //TODO: get whisky_pk
    const id = 1;
    history.push(`/newWhiskyReview/${id}`)
  }

  return (
    <>
    <S.TitleWrapper>
    <S.Title>리뷰</S.Title>
    <div onClick={handleReviewClick} style={{display:'flex'}}>
          <S.PenIcon src={PenIcon} />
          <P>리뷰 쓰기</P>
        </div>
    </S.TitleWrapper>
    <S.Wrapper>
      <S.InfoWrapper>
        <S.WhiskyImg src="../../../../../assets/CustomIcons/reviewGlass.svg"></S.WhiskyImg>

        <S.LineWrapper>
          <S.InfoWrapper>
            <S.Score>131</S.Score>
            <S.ScoreText>점(평균)</S.ScoreText>
          </S.InfoWrapper>
          <S.ReviewText>334개의 리뷰</S.ReviewText>
        </S.LineWrapper>
      </S.InfoWrapper>

      <S.ReviewListWrapper>
        <Review></Review>
        <Review></Review>
      </S.ReviewListWrapper>
    </S.Wrapper>
    </>
   
  );
}

export default ReviewList;
