import styled from "styled-components";

const RegisterWhiskyWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const RegisterWhiskyRegisterForm = styled.form`
  width: 100%;
`;

const RegisterTitleWrapper = styled.section`
  width: 100%;
`;

const RegisterPhotoWrapper = styled.section`
  width: 100%;
`

const RegisterDescriptWrapper = styled.section`
  width: 100%;
`

const MarginWrapper = styled.div`
  margin-bottom: 12px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top:155px;
`;
const TempSaveBtn = styled.button`
  width: 192px;
  height: 56px;
  align-items: center;
  padding: 16px;
  border: 1px solid #272624;
  color: #272624;
  background: #edece6;
  margin-right: 8px;
`;
const RegisterWhiskyBtn = styled.button`
  width: 192px;
  height: 56px;
  align-items: center;
  padding: 16px;
  border: 1px solid #272624;
  background: #272624;
  color: #edece6;
`;


export default {
  RegisterWhiskyWrapper,
  RegisterWhiskyRegisterForm,
  RegisterTitleWrapper,
  RegisterPhotoWrapper,
  RegisterDescriptWrapper,
  TempSaveBtn,
  RegisterWhiskyBtn,
  MarginWrapper,
  ButtonsWrapper

}