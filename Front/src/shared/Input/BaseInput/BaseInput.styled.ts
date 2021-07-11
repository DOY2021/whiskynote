import styled, { FlattenSimpleInterpolation } from 'styled-components';
import Palette from '../../../lib/css/Pallete';


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
      border: 1px solid ${Palette.YB600}
  }
  &::placeholder {
    ${({ placeholderStyle }) => placeholderStyle}
    
  }

`;
