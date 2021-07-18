import styled from "styled-components";

const ImageSliderWrapper = styled.div`
    display: flex;
    overflow-x: hidden;

    position: relative;

    width: 470px;
    height: 580px;
`;

const ImageSliderItem = styled.img`
    flex-shrink: 0;
    width: 470px;
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

const ImageSliderDot = styled.div`
    width: 16px;
    height: 16px;
    background-color: white;

    border-radius: 8px;

    & + & {
        margin-left: 10px;
    }
`;

export default {
  ImageSliderDot,
  ImageSliderDotWrapper,
  ImageSliderItem,
  ImageSliderWrapper
}
