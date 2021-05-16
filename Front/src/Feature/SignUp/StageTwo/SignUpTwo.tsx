import React, { useRef, useState } from 'react';
import useInput from '../../../hook/useInput';
import SignInput from '../../../shared/Input/SignInput/SignInput';
import SignTemplate from '../../../shared/SignTemplate/SignTemplate';
import useSignUpErr from '../useSignUpErr';
import S from './SignUpTwo.styled';

function SignUpTwo() {
  const [policyCheck, setChecked] = useState(false);

  const [imageFile, setFile] = useState<string>();

  const handlePolicyCheck = () => {
    setChecked(!policyCheck);
  };
  const inputOpenImageRef = useRef<HTMLInputElement>(null);

  const handleOpenImageRef = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!inputOpenImageRef.current) return;
    inputOpenImageRef.current.click();
  };

  const receiveImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files === null) return;

    const img = event.currentTarget.files[0];
    const t = URL.createObjectURL(img);
    setFile(t);
    console.log(t);
  };

  const [nickname, setNickname, handleNicknameInput, resetNickname] =
    useInput();
  const [bio, setBio, handleBioInput, resetBio] = useInput();

  const { errMsg, setEmailErr, setNicknameErr, setPasswordErr } =
    useSignUpErr();

  return (
    <SignTemplate title="회원가입">
      <S.SignUpProfileContainer onClick={handleOpenImageRef}>
        {imageFile ? (
          <S.SignUpProfileImage src={imageFile} />
        ) : (
          <S.SignUpProfileDefault />
        )}
        <S.SignUpProfileCamera />
        <input
          style={{ display: 'none' }}
          type="file"
          ref={inputOpenImageRef}
          onChange={receiveImage}
          accept="image/*"
        />
      </S.SignUpProfileContainer>
      <SignInput
        hasError={errMsg.nickname !== null}
        isValidated={false}
        value={nickname}
        onChange={handleNicknameInput}
        signType="signup"
        name="name"
        inputLabel="이름"
        placeholder="이름을 입력해주세요."
        maxLength={10}
        errorMsg={errMsg.nickname}
      />
      <S.SignUpBio
        placeholder="200자 이내의 소개글을 입력해주세요"
        maxLength={200}
        value={bio}
        onChange={handleBioInput}
      />
      <S.SignUpPolicyContainer>
        <S.SignUpPolicyIcon
          onClick={handlePolicyCheck}
          isChecked={policyCheck}
        />
        [필수] 개인정보와 정보처리방침 동의
      </S.SignUpPolicyContainer>
    </SignTemplate>
  );
}

export default SignUpTwo;
