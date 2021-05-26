import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { profileAPI } from '../../../api/profile';
import useInput from '../../../hook/useInput';
import { useUserDispatch, useUserState } from '../../../hook/useUserContext';
import Button from '../../../shared/Button/Button';
import SignInput from '../../../shared/Input/SignInput/SignInput';
import SignTemplate from '../../../shared/SignTemplate/SignTemplate';
import { RegisterDataProp } from '../EmailSignUp/SignUp';
import useSignUpErr from '../useSignUpErr';
import S from './SignUpTwo.styled';

function SignUpTwo() {
  const history = useHistory();

  const [policyCheck, setChecked] = useState(false);

  const [imageFile, setFile] = useState<File>();
  const [imageURL, setURL] = useState<string>();

  const handlePolicyCheck = () => {
    setChecked(!policyCheck);
  };
  const inputOpenImageRef = useRef<HTMLInputElement>(null);

  const handleOpenImageRef = () => {
    if (!inputOpenImageRef.current) return;
    inputOpenImageRef.current.click();
  };

  const receiveImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files === null) return;

    const img = event.currentTarget.files[0];
    const t = URL.createObjectURL(img);
    setFile(img);
    setURL(t);
  };

  const [nickname, setNickname, handleNicknameInput, resetNickname] =
    useInput();
  const [bio, setBio, handleBioInput, resetBio] = useInput();

  const { errMsg, setEmailErr, setNicknameErr, setPasswordErr } =
    useSignUpErr();

  const [loading, setLoading] = useState(false);

  const user_id = useUserState();

  const dispatch = useUserDispatch();

  const handleRegisterSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    console.log(event);
    event.preventDefault();

    setLoading(true);
    console.log('?');

    const fd = new FormData();

    fd.append('nickname', nickname);
    fd.append('bio', bio);
    if (imageFile) fd.append('profile_photo', imageFile);

    try {
      const registerData: any = await profileAPI.createProfile(fd);
      if (!user_id?.user_id) return;
      if (!dispatch) return;
      dispatch({
        type: 'LOGIN',
        payload: {
          user_id: user_id.user_id,
          isLoggedIn: true,
          nickname,
          bio,
          profile_photo: imageURL ? imageURL : null,
        },
      });
      history.push('/');
    } catch (e) {
      setNicknameErr(e.detail);
    }

    setLoading(false);
  };

  return (
    <SignTemplate title="회원가입">
      <S.SignUpForm onSubmit={handleRegisterSubmit}>
        <S.SignUpProfileContainer onClick={handleOpenImageRef}>
          {imageFile ? (
            <S.SignUpProfileImage src={imageURL} />
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
        <Button
          size="login"
          variant="primary"
          disabled={!bio || !nickname || !policyCheck}
          btnType="button"
        >
          다음
        </Button>
      </S.SignUpForm>
    </SignTemplate>
  );
}

export default SignUpTwo;
