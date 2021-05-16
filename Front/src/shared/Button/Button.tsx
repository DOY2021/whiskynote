/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import styled, { css } from 'styled-components';
import Palette from '../../css/Palette';

export type ButtonSize =
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'xsmall'
  | 'login'
  | 'fit';
export type ButtonVariant = 'primary' | 'secondary' | 'grayscale';

export interface ButtonProp {
  size?: ButtonSize;
  disabled?: boolean;
  type?: any; // outline, text;
  variant?: ButtonVariant;
  children?: any;
  className?: any;
}

const sizes = {
  xlarge: {
    height: '48px',
    fontSize: '16px',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  large: {
    height: '40px',
    fontSize: '14px',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  medium: {
    height: '32px',
    fontSize: '13px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '6px',
    paddingBottom: '6px',
  },
  small: {
    height: '28px',
    fontSize: '13px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  xsmall: {
    height: '24px',
    fontSize: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  login: {
    height: '48px',
    width: '432px',
    fontSize: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  fit: {
    height: '100%',
    width: '100%',
    fontSize: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '4px',
    paddingBottom: '4px',
  },
};

const sizeStyles = css<ButtonProp>`
  ${({ size }) => css`
    ${(size === 'login' || size === 'fit') && `width: ${sizes.login.width};`}
    height: ${sizes[size ?? 'medium'].height};
    font-size: ${sizes[size ?? 'medium'].fontSize};
    padding-left: ${sizes[size ?? 'medium'].paddingLeft};
    padding-right: ${sizes[size ?? 'medium'].paddingRight};
    padding-top: ${sizes[size ?? 'medium'].paddingTop};
    padding-bottom: ${sizes[size ?? 'medium'].paddingBottom};
  `}
`;

const handleColors = (variant, hover, active, disabled) => {
  if (!hover && !active && !disabled) {
    switch (variant) {
      case 'primary':
        return Palette.YB500;
      case 'secondary':
        return Palette.Violet500;
      case 'grayscale':
        return Palette.Gray500;
      default:
        return;
    }
  }
  if (hover) {
    switch (variant) {
      case 'primary':
        return Palette.YB600;
      case 'secondary':
        return Palette.Violet600;
      case 'grayscale':
        return Palette.Gray600;
      default:
        return;
    }
  }
  if (active) {
    switch (variant) {
      case 'primary':
        return Palette.YB400;
      case 'secondary':
        return Palette.Violet400;
      case 'grayscale':
        return Palette.Gray400;
      default:
        return;
    }
  }
  if (disabled) {
    switch (variant) {
      case 'primary':
        return Palette.YB200;
      case 'secondary':
        return Palette.Violet200;
      case 'grayscale':
        return Palette.Gray200;
      default:
        return;
    }
  }
};

const Btn = styled.button<ButtonProp>`
  ${sizeStyles}

  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  text-align: center;

  color: ${props =>
    props.type
      ? css`
          ${handleColors(props.variant, null, null, null)}
        `
      : css`white`};
  background-color: ${props =>
    props.type
      ? css`white`
      : css`
          ${handleColors(props.variant, null, null, null)}
        `};
  border: ${props =>
    props.type == 'outline'
      ? css`1px solid ${handleColors(props.variant, null, null, null)}`
      : css`none`};
  border-radius: 4px;

  &:hover {
    color: ${props =>
      props.type
        ? css`
            ${handleColors(props.variant, true, null, null)}
          `
        : css`white`};
    background-color: ${props =>
      props.type
        ? css`white`
        : css`
            ${handleColors(props.variant, true, null, null)}
          `};
  }

  &:active {
    background-color: ${props =>
      props.type
        ? css`white`
        : css`
            ${handleColors(props.variant, null, true, null)}
          `};
    border: ${props =>
      props.type == 'outline'
        ? css`1px solid ${handleColors(props.variant, null, true, null)}`
        : css`none`};
  }

  &:disabled {
    background-color: ${props =>
      props.type
        ? css`white`
        : css`
            ${handleColors(props.variant, null, null, true)}
          `};
    border: ${props =>
      props.type == 'outline'
        ? css`1px solid ${handleColors(props.variant, null, null, true)}`
        : css`none`};
    cursor: default;
  }
`;

function Button({
  size = 'medium',
  type,
  variant = 'primary',
  disabled = false,
  children,
}: ButtonProp) {
  return (
    <>
      <Btn
        size={size}
        type={type}
        disabled={disabled}
        variant={variant}
        className={disabled && 'button:disabled'}
      >
        {children}
      </Btn>
    </>
  );
}

export default Button;
