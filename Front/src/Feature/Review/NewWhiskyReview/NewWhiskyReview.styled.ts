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
const Title = styled.p`
  ${Typography.display4};
  color: #201F1E;
  margin-bottom:40px;
`
const MarginWrapper = styled.div`
  margin-bottom: 12px;
`;
const ElementWrapper = styled.div`
  margin-bottom: 30px;
`;
const ImageUploadGuideline = styled.p`
  font-size: 16px;
  color: #73481e;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top:155px;
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
`;
const RegisterWhiskyBtn = styled.button`
  width: 192px;
  height: 56px;
  align-items: center;
  padding: 16px;
  border: 1px solid #272624;
  background: #272624;
  color: #edece6;
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
  Title
};
