import React from 'react';
import S from './MyPage.styled';

function MyPage() {
  return (
    <S.MyPageWrapper>
      <S.ProfileWrapper>
        <S.ProfileImg />
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
