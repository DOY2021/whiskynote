import styled from "styled-components";
import Palette from "../../../../lib/css/Pallete";

const RegisterInputWrapper = styled.div`
    position: relative;
    width: 100%;

    :hover{
        border: 1px solid #9C9B99;
        background-color: #E7E5DE;
    }
`;

const RegisterInput = styled.input`
    width: 100%;
    height: 56px;
    padding: 15px 16px;
    background-color: #E7E5DE;


    :focus {
        padding: 15px 16px;
    }
`;

const RegisterInputUnit = styled.div`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
`;

export default {
    RegisterInput,
    RegisterInputWrapper,
    RegisterInputUnit
}

