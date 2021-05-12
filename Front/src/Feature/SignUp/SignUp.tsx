import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { authAPI } from '../../api/auth';
import useInput from '../../hook/useInput';
import Button from '../../shared/Button/Button';

import SignInput from '../../shared/Input/SignInput/SignInput';
import S from './SignUp.styled';
import useSignUpErr from './useSignUpErr';
import CSRFToken from '../../shared/CSRFToken';

export type RegisterDataProp = {
  type: 'success' | 'fail';
  data: any;
};

function SignUp() {
  const history = useHistory();

  const [policyCheck, setChecked] = useState(false);

  const [email, setEmail, handleEmailInput, resetEmail] = useInput();
  const [
    nickname,
    setNickname,
    handleNicknameInput,
    resetNickname,
  ] = useInput();
  const [
    password,
    setPassword,
    handlePasswordInput,
    resetPassword,
  ] = useInput();

  const [loading, setLoading] = useState(false);

  const {
    errMsg,
    setEmailErr,
    setNicknameErr,
    setPasswordErr,
  } = useSignUpErr();

  const handleRegisterSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setLoading(true);

    const registerData: RegisterDataProp = await authAPI.postRegister({
      nickname,
      email,
      password1: password,
      password2: password,
    });
    console.log(registerData);

    resetSignErr();
    if (registerData.type === 'success') {
      resetNickname();
      resetPassword();
      resetEmail();
      history.push('/signup/landing');
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

  function resetSignErr() {
    setPasswordErr(null);
    setNicknameErr(null);
    setEmailErr(null);
  }

  const handlePolicyCheck = () => {
    setChecked(!policyCheck);
  };

  return (
    <S.SignUpWrapper>
      <S.SignUpTemplate>
        <S.SignUpHeader>
          <S.SignUpHeaderH1>텍스터에 오신 것을 환영해요!</S.SignUpHeaderH1>
          <S.SignUpHeaderH2>
            회원가입 후 텍스터의 큐레이션 서비스를 이용해보세요.
          </S.SignUpHeaderH2>
        </S.SignUpHeader>
  

        <S.SignUpForm onSubmit={handleRegisterSubmit}>
          <CSRFToken />
          <SignInput
            hasError={errMsg.nickname !== null}
            isValidated={false}
            value={nickname}
            onChange={handleNicknameInput}
            signType="signup"
            name="nickname"
            inputLabel="닉네임"
            placeholder="영문+숫자 조합 10자 이내로 입력해주세요."
            maxLength={10}
            errorMsg={errMsg.nickname}
          />
          <SignInput
            hasError={errMsg.email !== null}
            isValidated={false}
            signType="signup"
            value={email}
            onChange={handleEmailInput}
            name="email"
            inputLabel="이메일"
            placeholder="imtexter@gmail.com"
            errorMsg={errMsg.email}

            // ref={register({ required: true })}
          />
          <SignInput
            signType="signup"
            hasError={errMsg.password !== null}
            isValidated={false}
            value={password}
            onChange={handlePasswordInput}
            type="password"
            name="password"
            inputLabel="비밀번호"
            placeholder="영문+숫자 조합 8자리 이내로 입력해주세요."
            errorMsg={errMsg.password}

            // ref={register({ required: true })}
          />
          <S.SignUpPolicyContainer>
            <S.SignUpPolicyIcon
              onClick={handlePolicyCheck}
              isChecked={policyCheck}
            />
            [필수] 개인정보와 정보처리방침 동의
          </S.SignUpPolicyContainer>
          <S.SignUpBtnContainer>
            <Button
              size="xlarge"
              variant="secondary"
              disabled={loading || !email || !password || !nickname}
            >
              회원가입
            </Button>
          </S.SignUpBtnContainer>
        </S.SignUpForm>
      </S.SignUpTemplate>
    </S.SignUpWrapper>
  );
}

export default SignUp;
