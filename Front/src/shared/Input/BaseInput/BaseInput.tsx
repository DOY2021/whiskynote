import React, { Ref } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import Typography from '../../../lib/css/Typography';
import { StyledBaseInput } from './BaseInput.styled';

export interface BaseInputProp {
  width?: any;
  height?: any;
  fontStyle?: FlattenSimpleInterpolation;
  value: string;
  placeholder?: string;
  placeholderStyle?: FlattenSimpleInterpolation;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  type?: string;
  name?: string;
}

function BaseInput({
  width = '50px',
  height = '50px',
  fontStyle = Typography.subhead3,
  value,
  placeholder,
  placeholderStyle = Typography.body1,
  onChange,
  children,
  type = 'text',
  ...rest
}: BaseInputProp) {
  return (
    <StyledBaseInput
      name={rest.name}
      type={type}
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      fontStyle={fontStyle}
      placeholder={placeholder}
      placeholderStyle={placeholderStyle}
      {...rest}
    >
      {children}
    </StyledBaseInput>
  );
}

export default BaseInput;
