import React, { useEffect } from 'react';
import S from './ReviewList.styled';
import { useState } from 'react';
import Review from '../Review/Review';
import PenIcon from '../../../../../assets/CustomIcons/pen.svg';
import P from '../../../../shared/P/P';
import { useHistory } from 'react-router';
import { TypoGraphyCategory } from '../../../../lib/css/TempTypo';
import Glass from '../../../../../assets/CustomIcons/reviewGlass.svg'
import { ReactionApi } from '../../../../api/reaction';
import { ReactionList } from '../../../../api/reaction';

function ReviewList(props: {
  whisky_ratings?: number;
  rating_counts?: number;
}) {
  const history = useHistory();
  const [reviewItems, setReviewItems] = useState<ReactionList[]>([])
  const [reviewCount, setReviewCount] = useState()

  let id = window.location.href.split("/").pop();
  const handleReviewClick = () => {

  
    history.push(`/newWhiskyReview/${id}`);
  };

  useEffect(() => {
    ReactionApi.getReviews(parseInt(id!)).then((review) => {
      console.log(review)
      setReviewCount(review.count)
      setReviewItems(review.results)
    })
  },[])

  return (
    <>
      <S.TitleWrapper>
        <S.Title>리뷰</S.Title>
        <div
          onClick={handleReviewClick}
          style={{ display: 'flex', cursor: 'pointer' }}
        >
          <PenIcon src={PenIcon} />
          <S.ReviewBtnText>리뷰 쓰기</S.ReviewBtnText>
        </div>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.InfoWrapper>
          <Glass style={{'marginRight': '26px'}}/>

          <S.LineWrapper>
            <S.InfoWrapper>
              <S.Score>131</S.Score>
              <S.ScoreText>점(평균)</S.ScoreText>
            </S.InfoWrapper>
            <S.ReviewText>{reviewCount}개의 리뷰</S.ReviewText>
          </S.LineWrapper>
        </S.InfoWrapper>

        <S.ReviewListWrapper>
          {/* <Review></Review>
          <Review></Review> */}
          {
            reviewItems.map(item => {
              let reviewScore = (item.nose_rating+item.taste_rating+item.finish_rating)/3
              return (
                <Review key={item.id} username={item.userName} reviewScore={reviewScore} reviewDate={item.modified_at} reviewText={item.review_body}></Review>
              )
            })
          }
          
        </S.ReviewListWrapper>
      </S.Wrapper>
    </>
  );
}

export default ReviewList;
