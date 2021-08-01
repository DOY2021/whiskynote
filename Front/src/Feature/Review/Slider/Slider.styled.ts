import styled from 'styled-components';
import Typography from '../../../lib/css/Typography';

const SliderWrapper = styled.div`
  margin-topo: 10px;
  display: flex;
  align-items: row;
`;
const InputRange = styled.input`
  -webkit-appearance: none;
  width: 395px;
  height: 12px;
  background: #dedbd0;
  border-radius: 12px;
  outline: none;
  margin-top: 16px;
  background-image: linear-gradient(#5f5c4d, #5f5c4d);
  background-size: 0%;
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;

const SliderLabel = styled.div`
  color: #5c5955;
  font-size: 18px;
`;
const Score = styled.div`
  margin-left: 15px;
  color: #272624;
  ${Typography.display2}
`;

const ScoreDefaultText = styled.span`
  color: #706d69;
  font-size: 18px;
  margin-top: 14px;
  margin-left: 3px;
`;

export default {
  SliderWrapper,
  InputRange,
  SliderLabel,
  Score,
  ScoreDefaultText,
};
