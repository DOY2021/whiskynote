import styled from "styled-components";
import { TypoGraphyTheme } from "../../../lib/css/TempTypo";
import Typography from "../../../lib/css/Typography";

const DescriptWrapper = styled.div`
    width:70%;
`;

const DescriptText = styled.div`
    margin-top: 30px;
    ${TypoGraphyTheme.body2}
    white-space: pre-wrap;
    line-height: 27px;
    color: #5C5854;
`;

export default {
  DescriptWrapper,
  DescriptText
}