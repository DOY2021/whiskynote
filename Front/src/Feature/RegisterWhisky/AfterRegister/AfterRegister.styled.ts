import styled from "styled-components";
import { absoluteCenter } from "../../../lib/css/Mixin";

const AfterRegisterLayout = styled.div`
    ${absoluteCenter}

    width: 100%;
    height: 100vh;
`;

const AfterRegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align : center;
    height: 256px;
`;

const AfterRegisterBtnWrapper = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
`;

export default {
  AfterRegisterLayout,
  AfterRegisterWrapper,
  AfterRegisterBtnWrapper
    
}