import styled from 'styled-components';

const SliderLabel = styled.div`
  color: #5c5955;
  font-size: 18px;
  margin-bottom: 12px;
`;

const HashTagList = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-items: row; 
  margin-bottom: 16px;
`;
export default {
  SliderLabel,
  ButtonWrapper,
  HashTagList
};