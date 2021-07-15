import styled from 'styled-components';
import { absoluteCenter, responsiveSize } from '../../../lib/css/Mixin';
import Typography from '../../../lib/css/Typography';



const MailVfWrapper = styled.div`
  ${absoluteCenter}
  width: 100%;
  height: 90vh;
`;

const MailVfTemplate = styled.div`
  ${absoluteCenter}
  flex-direction: column;
  ${responsiveSize('720px', '620px', '30%', '50%')}
`;

const MailVfHeader = styled.header`
  ${absoluteCenter}
  flex-direction:column;
  ${responsiveSize('100%', '82px', '80%', '10%')}
`;

const MailVfHeaderH1 = styled.h1`
  ${Typography.display2}
  margUp-bottom: 12px;
`;
const MailVfHeaderH2 = styled.h2`
  ${Typography.body1}
`;

export default {
  MailVfHeader,
  MailVfHeaderH1,
  MailVfHeaderH2,
  MailVfTemplate,
  MailVfWrapper,
};
