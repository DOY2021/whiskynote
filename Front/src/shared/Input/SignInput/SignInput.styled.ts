import styled, { css } from 'styled-components';
import Palette from '../../../lib/css/Pallete';
import Typography from '../../../lib/css/Typography';


import BaseInput from '../BaseInput/BaseInput';

type StyledSignInputProp = {
  hasError?: boolean;
  isValidated?: boolean;
  signType?: 'signup' | 'signin';
};

export const StyledSignInputWrapper = styled.div`
  position: relative;
  width: 432px;
  height: 78px;
`;

export const StyledSignInput = styled(BaseInput)<StyledSignInputProp>`
  ${({ hasError }) => {
    if (hasError)
      return css`
        border: 1px solid ${Palette.ErrorLight};
      `;
  }}
  ${({ signType }) => {
    if (signType === 'signup') {
      return css`
        padding-top: 20px;
        padding-left: 16px;
      `;
    } else {
      return css`
        padding-left: 16px;
      `;
    }
  }}
`;

export const StyledSignErrorMsg = styled.div<StyledSignInputProp>`
  height: 20px;
  ${({ hasError }) => {
    if (!hasError) {
      return css`
        display: none;
      `;
    } else {
      return css`
        display: block;
        margin-left: 16px;
        color: ${Palette.ErrorNormal};
        ${Typography.body}
      `;
    }
  }}
`;

export const StyledSignLabel = styled.label<StyledSignInputProp>`
  ${Typography.subhead1}
  color: ${Palette.Gray600};
  display: none;
  ${({ hasError }) => {
    if (hasError) {
      return css`
        color: ${Palette.ErrorNormal};
      `;
    }
  }}
  ${({ signType }) => {
    if (signType === 'signup') {
      return css`
        display: block;
        position: absolute;
        top: 7px;
        left: 16px;
      `;
    }
  }}
`;

export const StyledSignIcon = styled.div<StyledSignInputProp>`
  position: absolute;
  right: 18px;
  top: 18px;
  display: none;
  ${({ hasError }) => {
    if (hasError) {
      return css`
        display: block;

        color: ${Palette.ErrorNormal};
      `;
    }
  }}
  ${({ isValidated }) => {
    if (isValidated) {
      return css`
        display: block;
        background-color: ${Palette.SuccessNormal};
        color: ${Palette.White};
      `;
    }
  }};
`;
