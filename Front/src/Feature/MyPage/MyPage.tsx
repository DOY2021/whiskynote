import React from 'react';
import { useUserState } from '../../hook/useUserContext';
import S from './MyPage.styled';

function MyPage() {
  const user = useUserState();
  return (
    <S.MyPageWrapper>
      <S.ProfileWrapper>
        {user?.profile_photo && <S.ProfileImg />}
        <S.ProfileContentWrapper>
          <S.ProfileContentTop>
            <S.ProfileContentTopName>Hi</S.ProfileContentTopName>
          </S.ProfileContentTop>
        </S.ProfileContentWrapper>
      </S.ProfileWrapper>
    </S.MyPageWrapper>
  );
}

export default MyPage;
