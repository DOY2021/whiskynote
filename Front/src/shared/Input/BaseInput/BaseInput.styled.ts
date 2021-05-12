import styled, { FlattenSimpleInterpolation } from 'styled-components';
import Palette from '../../../css/Palette';

type StyledBaseInputProp = {
  width: any;
  height: any;
  fontStyle: FlattenSimpleInterpolation;
  placeholderStyle: FlattenSimpleInterpolation;
};

export const StyledBaseInput = styled.input<StyledBaseInputProp>`
  position: relative;
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  border: 1px solid ${Palette.Gray400};
  border-radius: 5px;
  ${({ fontStyle }) => fontStyle}

  &:hover, :focus{
      border 1px solid ${Palette.YB400}
  }
  &::placeholder {
    ${({ placeholderStyle }) => placeholderStyle}
    
  }

`;
