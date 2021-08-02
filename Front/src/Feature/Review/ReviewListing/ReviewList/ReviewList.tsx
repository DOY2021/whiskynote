import React from 'react';
import S from './ReviewList.styled';
import { useState } from 'react';
import Review from '../Review/Review';

function ReviewList(props: {
  whisky_ratings?: number;
  rating_counts?: number;
}) {
  return (
    <>
    <S.Title>리뷰</S.Title>
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
