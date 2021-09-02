import styled from "styled-components";

const RegisterWhiskyInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

`

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


const RegisterDropDownWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 56px;
    padding: 16px 15px;
    background-color: #E7E5DE;
`;

const RegisterDropDownIcon = styled.div`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
`;

const DropdownItemWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #EDECE6;
    cursor: pointer;
    
    p + p {
        margin-left: 8px;
    }

    :hover {
        background-color: #E7E5DE;
      }
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

const RegisterInputLabel = styled.div`
  display: flex;
  align-items: center;

  p + p {
    margin-left: 8px;
  }

  margin-top: 12px;
`;

const RegisterWhiskySearchWrapper = styled.div`
  position: relative;
  width: 100%;
  
`;

const SearchDropdownItemWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #EDECE6;
    cursor: pointer;
    
    p + p {
        margin-left: 8px;
    }

    :hover {
        background-color: #E7E5DE;
      }
`;

export default {
  RegisterWhiskyInnerWrapper,
  RegisterWhiskyRegisterForm,
  RegisterTitleWrapper,
  RegisterPhotoWrapper,
  RegisterDescriptWrapper,
  TempSaveBtn,
  RegisterWhiskyBtn,
  MarginWrapper,
  ButtonsWrapper,
  RegisterInputLabel,
  RegisterWhiskySearchWrapper,
  SearchDropdownItemWrapper,
  RegisterDropDownIcon,
    RegisterDropDownWrapper,
    DropdownItemWrapper,

}