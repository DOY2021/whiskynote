import React from 'react';
import Palette from '../../../css/Palette';
import S from './MailVf.styled';

function MailVf() {
  return (
    <S.MailVfWrapper>
      <S.MailVfTemplate>
        <S.MailVfHeaderH1>인증 메일이 발송되었어요</S.MailVfHeaderH1>
        <S.MailVfHeaderH2>
          메일함에서{' '}
          <span style={{ color: `${Palette.YB600}` }}>info@texter.co.kr</span>을
          확인해주세요.
        </S.MailVfHeaderH2>
        <S.MailVfHeaderH2>
          이메일 인증하기 버튼을 누르면 텍스터 서비스를 이용할 수 있어요.
        </S.MailVfHeaderH2>
      </S.MailVfTemplate>
    </S.MailVfWrapper>
  );
}

export default MailVf;
