import { FaCheckSquare, FaUserCircle } from 'react-icons/fa';
import { BiCamera } from 'react-icons/bi';
import styled, { css } from 'styled-components';
import { responsiveSize } from '../../../css/Mixin';
import Palette from '../../../css/Palette';

const SignFormWidth = '432px';

const SignUpProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  ${responsiveSize(SignFormWidth, '96px', '10%', '10%')}
`;

const SignUpProfileDefault = styled(FaUserCircle)`
  width: 102px;
  height: 96px;
  color: gray;
`;
const SignUpProfileImage = styled.img`
  border-radius: 48px;
  width: 96px;
  height: 96px;
`;

const SignUpProfileCamera = styled(BiCamera)`
  border-radius: 10px;
  background-color: black;
  color: white;
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 5px;
  transform: translateX(25px);
`;

const SignUpBio = styled.textarea`
position: relative;
${responsiveSize(SignFormWidth, '96px', '10%', '10%')}
border: 1px solid ${Palette.Gray400};
border-radius: 5px;
resize: none;
&:hover, :focus{
    border 1px solid ${Palette.YB400}
}
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${responsiveSize(SignFormWidth, '350px', '10%', '10%')}
`;

const SignUpPolicyContainer = styled.div`
  display: flex;
  ${responsiveSize(SignFormWidth, '50px', '10%', '10%')}
`;

type SignUpPolicyIconProp = {
  isChecked: boolean;
};

const SignUpPolicyIcon = styled(FaCheckSquare)<SignUpPolicyIconProp>`
  color: white;
  border: 2px solid ${Palette.Gray400};
  margin-right: 10px;
  ${({ isChecked }) => {
    if (isChecked)
      return css`
        color: ${Palette.YB300};
        border: none;
      `;
  }}
`;

export default {
  SignUpPolicyContainer,
  SignUpPolicyIcon,
  SignUpProfileContainer,
  SignUpProfileImage,
  SignUpProfileCamera,
  SignUpBio,
  SignUpProfileDefault,
  SignUpForm,
};
