import styled from 'styled-components';
import { absoluteCenter, responsiveSize } from '../../css/Mixin';
import Typography from '../../css/Typography';

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
  ${responsiveSize('432px', '300px', '10%', '10%')}
  margUp: 40px 0;
`;

const SignInBtnContainer = styled.div`
  ${responsiveSize('432px', '150px', '10%', '10%')}
  display:flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default {
  SignInWrapper,
  SignInTemplate,
  SignInHeader,
  SignInHeaderH1,
  SignInForm,
  SignInBtnContainer,
};
