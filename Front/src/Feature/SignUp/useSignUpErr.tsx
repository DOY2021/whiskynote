import React, { useReducer } from 'react';

type SignUpErrProp = {
  nickname: null | string;
  email: null | string;
  password: null | string;
};

const initialState: SignUpErrProp = {
  nickname: null,
  email: null,
  password: null,
};

type SignUpErrAction =
  | { type: 'EMAIL'; payload: string | null }
  | { type: 'NICKNAME'; payload: string | null }
  | { type: 'PASSWORD'; payload: string | null };

function reducer(state: SignUpErrProp, action: SignUpErrAction): SignUpErrProp {
  switch (action.type) {
    case 'EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'NICKNAME':
      return {
        ...state,
        nickname: action.payload,
      };
    case 'PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
  }
}

function useSignUpErr() {
  const [errMsg, dispatch] = useReducer(reducer, initialState);
  const setNicknameErr = (payload: string | null) =>
    dispatch({ type: 'NICKNAME', payload });
  const setEmailErr = (payload: string | null) =>
    dispatch({ type: 'EMAIL', payload });
  const setPasswordErr = (payload: string | null) =>
    dispatch({ type: 'PASSWORD', payload });

  return {
    errMsg,
    setNicknameErr,
    setEmailErr,
    setPasswordErr,
  };
}

export default useSignUpErr;
