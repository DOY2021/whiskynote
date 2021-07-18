import styled, { css } from "styled-components";

interface ImageSliderWrapperProp {
  position: number;
}

const SLIDER_WIDTH  = 470;

const ImageSliderBox = styled.div`
    position: relative;

    display: flex;
    overflow-x: hidden;

    width: ${SLIDER_WIDTH}px;
    height: 580px;

`;

const ImageSliderWrapper = styled.div<ImageSliderWrapperProp>`

    

    display: flex;

    transition: all 0.5s ease-in;

    ${({position}) => position && css`
        transform: translateX(-${position * SLIDER_WIDTH}px);
    `}
`;

const ImageSliderItem = styled.img`
    flex-shrink: 0;
    width: ${SLIDER_WIDTH}px;
    height: 580px;

    object-fit: cover;
`;

const ImageSliderDotWrapper = styled.div`
    display: flex;

    position: absolute;
    bottom: 30px;
    left: 50%;

    transform: translateX(-50%);
`;

interface ImageSliderDotProp {
  isSelected: boolean;
}

const ImageSliderDot = styled.div<ImageSliderDotProp>`
    width: 16px;
    height: 16px;
    background-color: white;

    border-radius: 8px;

    ${({isSelected}) => isSelected && css`
        background-color: black;
    `
}

    & + & {
        margin-left: 10px;
    }
`;

export default {
  ImageSliderBox,
  ImageSliderDot,
  ImageSliderDotWrapper,
  ImageSliderItem,
  ImageSliderWrapper
}
