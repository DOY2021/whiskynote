import styled, { css } from "styled-components";
import { TypoGraphyCategory, TypoGraphyTheme } from "../../../lib/css/Typography";

const ReviewInputWrapper = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 56px;
    

    background-color: #E7E5DE;
    border-radius: 2px;


    & + & {
        margin-top: 28px;
    }
`;

interface ReviewTitleWrapper {
  hasSubtitle: boolean
}

const ReviewTitleWrapper = styled.div<ReviewTitleWrapper>`
    display: flex;
    align-items: center;
    margin: 6px 8px;

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

const ReviewContentWrapper = styled.div`
    flex: 1;
    height: inherit;

    display:flex;
    align-items: center;

    position: relative;
`;

const ReviewCheckWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0 30px;
`;

const ReviewCheckItemWrapper = styled.div`
    margin-right: 20px;
`;

const ReviewContentText = styled.input`
    width: 100%;
    height: 100%;

    padding: 0;

    margin: 0px 8px;

    ${TypoGraphyTheme.body1}

    background-color: inherit;
`;

export default {
  ReviewInputWrapper,
  ReviewInputTitle,
  ReviewInputSubTitle,
  ReviewTitleWrapper,
  ReviewContentWrapper,
  ReviewContentText,
  ReviewCheckWrapper,
  ReviewCheckItemWrapper,
}