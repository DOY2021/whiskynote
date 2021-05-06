import React from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

import { BaseInputProp } from '../BaseInput/BaseInput';
import {
  StyledSignErrorMsg,
  StyledSignIcon,
  StyledSignInput,
  StyledSignInputWrapper,
  StyledSignLabel,
} from './SignInput.styled';

interface SignInputProp extends BaseInputProp {
  hasError: boolean;
  isValidated: boolean;
  errorMsg?: string | null;
  signType?: 'signup' | 'signin';
  inputLabel: string;
  placeholder?: string;
  type?: string;
  maxLength?: number;
}

function SignInput({
  hasError = false,
  isValidated = false,
  onChange,
  value,
  errorMsg,
  signType,
  inputLabel,
  placeholder,
  type = 'text',
  ...rest
}: SignInputProp) {
  return (
    <StyledSignInputWrapper>
      <StyledSignInput
        type={type}
        width="432px"
        height="56px"
        hasError={hasError}
        isValidated={isValidated}
        onChange={onChange}
        value={value}
        signType={signType}
        placeholder={placeholder}
        {...rest}
      />
      <StyledSignErrorMsg hasError={hasError}>{errorMsg}</StyledSignErrorMsg>
      <StyledSignLabel hasError={hasError} signType={signType}>
        {inputLabel}
      </StyledSignLabel>
      <StyledSignIcon hasError={hasError} isValidated={isValidated}>
        <FaExclamationCircle />
      </StyledSignIcon>
    </StyledSignInputWrapper>
  );
}

export default SignInput;
