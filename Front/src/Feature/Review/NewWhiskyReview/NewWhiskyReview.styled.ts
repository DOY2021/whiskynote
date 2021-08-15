import styled, { css } from 'styled-components';
import Palette from '../../../lib/css/Pallete';
import Typography from '../../../lib/css/Typography';

const NewWhiskyReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const NewWhiskyReviewInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  overflow:scroll;
`;

const TitleWrapper = styled.div`
  flex-direction:row;
  display:flex;
`
const Title = styled.p`
font-style: normal;
font-size: 40px;
  color: #201F1E;
  margin-bottom:40px;
  font-weight: 600;
`
const FileNum = styled.p`
  font-size: 16px;
  color: #8A8779;
  margin-top: 10px;
  margin-left: 6px;
`
const MarginWrapper = styled.div`
  margin-bottom: 24px;
`;
const ElementWrapper = styled.div`
  margin-bottom: 30px;
`;
const ImageUploadGuideline = styled.p`
  font-size: 14px;
  color: #73481e;
  letter-spacing: -0.03em;
  line-height: 140%;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top:62px;
  margin-bottom: 179px;
`;
const TempSaveBtn = styled.button`
  width: 192px;
  height: 56px;
  align-items: center;
  padding: 16px;
  border: 1px solid #272624;
  color: #272624;
  background: #edece6;
  margin-right: 8px;
  cursor:pointer;
`;
const RegisterWhiskyBtn = styled.button`
  width: 192px;
  height: 56px;
  align-items: center;
  padding: 16px;
  border: 1px solid #272624;
  background: #272624;
  color: #edece6;
  cursor:pointer;
`;

export default {
  ButtonsWrapper,
  NewWhiskyReviewWrapper,
  NewWhiskyReviewInnerWrapper,
  ImageUploadGuideline,
  ElementWrapper,
  MarginWrapper,
  TempSaveBtn,
  RegisterWhiskyBtn,
  Title,
  FileNum,
  TitleWrapper
};
