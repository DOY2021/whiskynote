import styled from 'styled-components';
import { absoluteCenter, responsiveSize } from '../../../css/Mixin';
import Typography from '../../../css/Typography';

const TypeChoiceWrapper = styled.div`
  ${absoluteCenter}
  width: 100%;
  height: 90vh;
`;

const TypeChoiceTemplate = styled.div`
  ${absoluteCenter}
  flex-direction: column;
  ${responsiveSize('720px', '620px', '30%', '50%')}
`;

const TypeChoiceHeader = styled.header`
  ${absoluteCenter}
  flex-direction:column;
  ${responsiveSize('100%', '82px', '80%', '10%')}
  margin-bottom: 40px;
`;

const TypeChoiceHeaderH1 = styled.h1`
  ${Typography.display2}
  margin-bottom: 15px;
`;

export default {
  TypeChoiceWrapper,
  TypeChoiceTemplate,
  TypeChoiceHeaderH1,
  TypeChoiceHeader,
};
