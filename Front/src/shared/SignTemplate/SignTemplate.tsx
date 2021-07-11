import React from 'react';
import styled from 'styled-components';
import { absoluteCenter, responsiveSize } from '../../lib/css/Mixin';

import Typography from '../../lib/css/Typography';


type SignTemplateProp = {
  children: React.ReactNode;
  title: string;
};

export default function SignTemplate({ children, title }: SignTemplateProp) {
  return (
    <SignUpWrapper>
      <SignUpTemplate>
        <SignUpHeader>
          <SignUpHeaderH1>{title}</SignUpHeaderH1>
        </SignUpHeader>
        {children}
      </SignUpTemplate>
    </SignUpWrapper>
  );
}

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
