import styled, { css } from 'styled-components';
import { absoluteCenter, responsiveSize } from '../../lib/css/Mixin';
import Typography from '../../lib/css/Typography';
import Button from '../../shared/Button/Button';
import { FaCheckSquare } from 'react-icons/fa';
import Palette from '../../lib/css/Palette';

const SignFormWidth = '432px';

const SignUpWrapper = styled.div`
  ${absoluteCenter}
  width: 100%;
  height: 90vh;
`;

const SignUpTemplate = styled.div`
  ${absoluteCenter}
  flex-direction: column;
  ${responsiveSize('720px', '620px', '30%', '50%')}
`;

const SignUpHeader = styled.header`
  ${absoluteCenter}
  flex-direction:column;
  ${responsiveSize('100%', '82px', '80%', '10%')}
  margin-bottom: 40px;
`;

const SignUpHeaderH1 = styled.h1`
  ${Typography.display2}
  margin-bottom: 15px;
`;
const SignUpHeaderH2 = styled.h2`
  ${Typography.body1}
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${responsiveSize(SignFormWidth, '350px', '10%', '10%')}
`;

const SignUpBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  ${responsiveSize(SignFormWidth, '50px', '10%', '10%')}
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
  SignUpWrapper,
  SignUpTemplate,
  SignUpHeader,
  SignUpHeaderH1,
  SignUpHeaderH2,
  SignUpForm,
  SignUpBtnContainer,
  SignUpPolicyContainer,
  SignUpPolicyIcon,
};
