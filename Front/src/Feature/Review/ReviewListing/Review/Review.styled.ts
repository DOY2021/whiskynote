import styled from 'styled-components';

const Title = styled.p`
  font-weight: 600;
  font-size: 32px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const IconWrapper = styled.div`
  display:flex; 
  flex-direction:column;
  margin-right:30px;
`
const UserIcon = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom:4px;
`
const UserName = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 140%;
  color: #2F2E2D;
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
  width: 60%;
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
  font-weight:500;
`
export default {
  Wrapper,
  IconWrapper,
  UserIcon,
  UserName,
  ScoreWrapper,
  ReviewScore,
  ReviewScoreText,
  Title,
  ReviewWrapper,
  ReviewText,
  Date
};
