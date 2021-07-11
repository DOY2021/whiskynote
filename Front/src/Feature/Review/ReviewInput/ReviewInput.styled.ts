import styled, { css } from "styled-components";
import { TypoGraphyCategory, TypoGraphyTheme } from "../../../lib/css/Typography";

const ReviewInputWrapper = styled.div`
    display: flex;

    width: 100%;
    max-width: 1200px;

    background-color: #E7E5DE;
    border-radius: 2px;

    padding: 6px 0px;
    padding-left: 8px;
`;

interface ReviewTitleWrapper {
  hasSubtitle: boolean
}

const ReviewTitleWrapper = styled.div<ReviewTitleWrapper>`
    display: flex;
    align-items: center;

    ${({hasSubtitle}) => hasSubtitle && css`
    width: 30%;
    `}

`;

const ReviewInputTitle = styled.div`
    width: max-content;

    padding: 5px;

    ${TypoGraphyTheme.body1}
`;

const ReviewInputSubTitle = styled.div`
    color: #ACA297;
    ${TypoGraphyTheme.body}
`;

interface ReviewContentWrapperProp {
  hasSubtitle: boolean
}

const ReviewContentWrapper = styled.div<ReviewContentWrapperProp>`

    width: 70%;
    height: inherit;

    ${({hasSubtitle}) => !hasSubtitle && css`
    flex:1;
    `}

`;

const ReviewContentText = styled.input`
    width: 100%;
    height: 100%;

    padding: 0;

    ${TypoGraphyTheme.body1}

    background-color: inherit;
`;

const ReviewContentDropDownWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
`;

export default {
  ReviewInputWrapper,
  ReviewInputTitle,
  ReviewInputSubTitle,
  ReviewTitleWrapper,
  ReviewContentWrapper,
  ReviewContentText,
  ReviewContentDropDownWrapper
}