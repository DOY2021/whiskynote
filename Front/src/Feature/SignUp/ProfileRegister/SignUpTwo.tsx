import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { profileAPI } from '../../../api/profile';
import useInput from '../../../hook/useInput';
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

  const handleRegisterSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setLoading(true);

    const registerData: RegisterDataProp = await profileAPI.createProfile({
      nickname,
      bio,
      profile_photo: imageFile ? imageFile : undefined,
    });

    // resetSignErr();
    if (registerData.type === 'success') {
      // resetNickname();
      // resetPassword();
      // resetEmail();
      // console.log('!');
      history.push('/signup/register_profile');
    } else {
      const errKey = Object.keys(registerData.data);
      // eslint-disable-next-line prefer-const
      for (let key of errKey) {
        if (key === 'email') {
          setEmailErr(registerData.data[key]);
        } else if (key === 'username') {
          setNicknameErr(registerData.data[key]);
        } else {
          setPasswordErr(registerData.data[key]);
        }
      }
    }
    setLoading(false);
  };

  return (
    <SignTemplate title="회원가입">
      <S.SignUpForm onClick={handleRegisterSubmit}>
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
        >
          다음
        </Button>
      </S.SignUpForm>
    </SignTemplate>
  );
}

export default SignUpTwo;
