import styled from 'styled-components';
import { responsiveSize } from '../../lib/css/Mixin';
import Typography from '../../lib/css/Typography';

const MyPageWidth = 720;

const ProfileImageSize = 180;

const MyPageWrapper = styled.div`
  margin: 0 auto;

  ${responsiveSize(`${MyPageWidth}px`, '90vh', '10%', '10%')};
`;

const ProfileWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 10vh;
`;

const ProfileImg = styled.img`
  ${responsiveSize(
    `${ProfileImageSize}px`,
    `${ProfileImageSize}px`,
    '10%',
    '10%',
  )}
`;

const ProfileContentWrapper = styled.div`
  flex: 1;
`;

const ProfileContentTop = styled.div`
  display: flex;
`;

const ProfileContentTopName = styled.span`
  ${Typography.display2}
`;

export default {
  MyPageWrapper,
  ProfileWrapper,
  ProfileImg,
  ProfileContentWrapper,
  ProfileContentTop,
  ProfileContentTopName,
};
