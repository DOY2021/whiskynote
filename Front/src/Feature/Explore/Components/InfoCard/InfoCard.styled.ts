import styled, { css } from "styled-components";
import Palette from "../../../../lib/css/Pallete";

const InfoCardWrapper = styled.li`
    display:flex;
    align-items: center;

    background-color: #E5E5df;

    height: 327px;

    padding: 0px 10px;
`;

const InfoCardImg = styled.img`
    flex: 1;
    height: 97%;

    object-fit: cover;
`;

const InfoCardDescWrapper = styled.div`
    flex: 2;
    height: 100%;

    padding: 32px;
`;

const InfoCardDetailWrapper = styled.div`
    height: 46px;
    overflow-y: hidden;
`;

const InfoCardDescTagWrapper = styled.ul`
    display:flex;
`;

interface InfoCardDescTagProp {
  color: Palette
}

const InfoCardDescTag = styled.li<InfoCardDescTagProp>`
    padding: 5px 8px;
    margin-right: 10px;
    border-radius: 3px;

    ${({color}) => color && css`
        background-color: ${color};
    `}

    color: white;
`;

export default {
  InfoCardDescTag,
  InfoCardDescTagWrapper,
  InfoCardDescWrapper,
  InfoCardImg,
  InfoCardWrapper,
  InfoCardDetailWrapper
}

