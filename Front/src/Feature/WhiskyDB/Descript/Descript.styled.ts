import styled from "styled-components";
import { TypoGraphyTheme } from "../../../lib/css/TempTypo";
import Typography from "../../../lib/css/Typography";

const DescriptWrapper = styled.div`
    width:70%;
`;

const DescriptText = styled.div`
    ${TypoGraphyTheme.body2}
    color: #5C5854;
`;

export default {
  DescriptWrapper,
  DescriptText
}