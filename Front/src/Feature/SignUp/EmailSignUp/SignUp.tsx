import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { authAPI } from '../../../api/auth';
import useInput from '../../../hook/useInput';
import Button from '../../../shared/Button/Button';

import SignInput from '../../../shared/Input/SignInput/SignInput';
import S from './SignUp.styled';
import useSignUpErr from '../useSignUpErr';
import CSRFToken from '../../../shared/CSRFToken';
import BaseInput from '../../../shared/Input/BaseInput/BaseInput';
import SignTemplate from '../../../shared/SignTemplate/SignTemplate';

export type RegisterDataProp = {
  type: 'success' | 'fail';
  data: any;
};

function SignUpOne() {
  const history = useHistory();

  const [policyCheck, setChecked] = useState(false);

  const [email, setEmail, handleEmailInput, resetEmail] = useInput();
  const [nickname, setNickname, handleNicknameInput, resetNickname] =
    useInput();
  const [password, setPassword, handlePasswordInput, resetPassword] =
    useInput();

  const [loading, setLoading] = useState(false);

  const { errMsg, setEmailErr, setNicknameErr, setPasswordErr } =
    useSignUpErr();

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
      console.log('!');
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

  function resetSignErr() {
    setPasswordErr(null);
    setNicknameErr(null);
    setEmailErr(null);
  }

  const handlePolicyCheck = () => {
    setChecked(!policyCheck);
  };

  return (
    <SignTemplate title="회원가입">
      <S.SignUpForm onSubmit={handleRegisterSubmit}>
        <CSRFToken />

        <SignInput
          signType="signup"
          hasError={errMsg.password !== null}
          isValidated={false}
          value={nickname}
          onChange={handleNicknameInput}
          name="name"
          inputLabel="이름"
          placeholder="이름을 입력해주세요."
          errorMsg={errMsg.nickname}

          // ref={register({ required: true })}
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

        <S.SignUpBtnContainer>
          {/* <Link to="signup/email/2"> */}
          <Button
            size="fit"
            variant="primary"
            disabled={loading || !email || !password}
          >
            다음
          </Button>
          {/* </Link> */}
        </S.SignUpBtnContainer>
      </S.SignUpForm>
    </SignTemplate>
  );
}

export default SignUpOne;
