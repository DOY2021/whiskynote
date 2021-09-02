import styled from "styled-components";
import { absoluteCenter } from "../../../lib/css/Mixin";

const AfterRegisterLayout = styled.div`
    ${absoluteCenter}
    height: 80vh;
`;

const AfterRegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align : center;
    
`;

const AfterRegisterBtnWrapper = styled.div`
    display: flex;
    width: 457px;
    justify-content: space-between;
`;

export default {
  AfterRegisterLayout,
  AfterRegisterWrapper,
  AfterRegisterBtnWrapper
    
}