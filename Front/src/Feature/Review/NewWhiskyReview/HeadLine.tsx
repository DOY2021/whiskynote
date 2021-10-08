import React from 'react';
import styled from 'styled-components';
import Palette from '../../../lib/css/Pallete';
import Typography from '../../../lib/css/Typography';

const FirstHeadLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

const HeadLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  margin-top: 48px;
`;
const HeadLineText = styled.p`
  color: #2f2e2d;
  ${Typography.headline};
  display: flex;
`;
const HeadLineMandatory = styled.p`
  color: ${Palette.YB600};
  ${Typography.headline};
  display: flex;
`;

function HeadLine(props) {
  return (
    <>
      {props.isFirst && (
        <FirstHeadLineWrapper>
          <HeadLineText>{props.inputText}</HeadLineText>
          {props.isMandatory && <HeadLineMandatory>*</HeadLineMandatory>}
        </FirstHeadLineWrapper>
      )}
      {!props.isFirst && (
        <HeadLineWrapper>
          <HeadLineText>{props.inputText}</HeadLineText>
          {props.isMandatory && <HeadLineMandatory>*</HeadLineMandatory>}
        </HeadLineWrapper>
      )}
    </>
  );
}

export default HeadLine;
