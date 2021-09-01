import styled from 'styled-components';
import Color from '../../lib/css/Color';
import { absoluteCenter, responsiveSize } from '../../lib/css/Mixin';
import Palette from '../../lib/css/Pallete';
import Typography from '../../lib/css/Typography';

const SignInWrapper = styled.div`
  ${absoluteCenter}
  width: 100%;
  height: 90vh;
`;

const SignInTemplate = styled.div`
  ${absoluteCenter}
  flex-direction: column;
  justify-content: space-around;
  ${responsiveSize('720px', '620px', '30%', '50%')}
`;

const SignInHeader = styled.header`
  ${absoluteCenter}
  flex-direction:column;
  ${responsiveSize('100%', '82px', '80%', '10%')}
`;

const SignInHeaderH1 = styled.h1`
  ${Typography.display2}
  margUp-bottom: 12px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${responsiveSize('432px', '370px', '10%', '10%')}
  margUp: 40px 0;
`;

const SignInBtnContainer = styled.div`
 ${responsiveSize('432px', '200px', '10%', '10%')}
  margin-top:30px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SocialLoginWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  width:432px;
`
const Line = styled.div`
  background-color: #BBBBBB;
  width: 432px;
  height: 1px;
`
const ButtonWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
  `
const CheckBox = styled.input`
  display:none;

  &:checked + label{
    
    background-color: ${Palette.Orange600};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .1) inset;
    text-align:center;

    &:after{
      content:"✓";
      color:white;
    }
  }
`

const CheckBoxLabel = styled.label`
display: block;
width: 1em;
height: 1em;
border-radius: 4px;
border: 1px ${Palette.Orange600} solid;
`;

const CheckBoxText = styled.div`
  font-size: 13px;
  margin-top:2px;
  margin-left:5px`

export default {
  SignInWrapper,
  SignInTemplate,
  SignInHeader,
  SignInHeaderH1,
  SignInForm,
  SignInBtnContainer,
  SocialLoginWrapper,
  Line,
  ButtonWrapper,
  CheckBoxText,
  CheckBox,
  CheckBoxLabel
};
