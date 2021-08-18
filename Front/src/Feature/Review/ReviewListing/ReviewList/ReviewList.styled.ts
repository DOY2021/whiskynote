import { TypoGraphyCategory } from './../../../../lib/css/TempTypo';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;
const Title = styled.p`
  font-family: Pretendard-Medium;
  font-size: 32px;
  line-height: 140%;
  margin-bottom: 19px;
`;

const WhiskyImg = styled.img`
  width: 46px;
  height: 124px;
  margin-right: 26px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: between;
`;
const Score = styled.span`
  font-weight: 600;
  font-size: 48px;
  color: #201f1e;
`;
const ScoreText = styled.span`
  font-size: 21px;
  color: #9a928a;
  margin-left: 6px;
  margin-top: 14px;
  width: 70px;
`;
const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReviewText = styled.p`
  color: #636358;
  font-size: 18px;
  margin-top: 8px;
`;

const ReviewListWrapper = styled.div`
  margin-top: 30px;
  margin-left: 3%;
`;

export default {
  WhiskyImg,
  Title,
  InfoWrapper,
  Score,
  ScoreText,
  ReviewText,
  LineWrapper,
  ReviewListWrapper,
  Wrapper,
  TitleWrapper,
};
