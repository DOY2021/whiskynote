import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom:65px;
`

const IconWrapper = styled.div`
  display:flex; 
  flex-direction:column;
  margin-right:30px;
`
const UserIcon = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-bottom:4px;
`
const UserName = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 140%;
  color: #2F2E2D;
  justify-content: center;
  display: flex;
`
const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom:16px;
`;
const ReviewScore = styled.p`
  font-size: 32px;
  color: #272624;
`;
const ReviewScoreText = styled.span`
  font-size: 18px;
  margin-top:7px;
  color: #706d69;
  margin-left:3px;
`;
const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const ReviewText = styled.p`
  color: #5c5854;
  font-size: 18px;
  line-height: 140%;
  margin-bottom: 16px;

`;

const Date = styled.p`
  color: #AFADA0;
  font-size:18px; 
  font-family: Pretendard-Medium;
  line-height: 140%;
  margin-bottom: 16px;
`

const LikeBtn = styled.button`
  border: 1px solid #B9B0A8;
  width: 179px;
  height: 57px;
  cursor:pointer;
  padding:16px;
  background-color: transparent;
  color: #988C81;
`
const BottomWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const Like = styled.p`
font-size: 18px;
color: #9A928A;
`
const LikeNum = styled.span`
font-size: 18px;
color: #5C5854;
margin-left:5px;
`
const LikeWrapper = styled.div`
margin-top:18px;
display:flex;
flex-direction:row;
`
export default {
  Wrapper,
  IconWrapper,
  UserIcon,
  UserName,
  ScoreWrapper,
  ReviewScore,
  ReviewScoreText,
  ReviewWrapper,
  ReviewText,
  Date,
  LikeBtn,
  BottomWrapper,
  LikeNum,
  Like,
  LikeWrapper
};
