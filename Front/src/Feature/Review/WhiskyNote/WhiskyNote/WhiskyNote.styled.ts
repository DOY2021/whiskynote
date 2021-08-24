import styled from 'styled-components';

const Label = styled.div`
  color: #5c5955;
  font-size: 18px;
  line-height: 140%;
  font-weight: 500;
  letter-spacing: -0.04em;
  margin-bottom:16px;
`;

const HashTagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-items: row;
  margin-bottom: 16px;
`;
export default {
  Label,
  ButtonWrapper,
  HashTagList,
};
