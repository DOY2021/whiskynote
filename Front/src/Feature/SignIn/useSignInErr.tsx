import React, { useReducer } from 'react';

type SignInErrProp = {
  non_field_errors: null | string;
};

const initialState: SignInErrProp = {
  non_field_errors: null,
};

type SignInErrAction = { type: 'NON_FIELD_ERRORS'; payload: string };

function reducer(state: SignInErrProp, action: SignInErrAction): SignInErrProp {
  return {
    ...state,
    non_field_errors: action.payload,
  };
}

const useSignInErr = () => {
  const [errMsg, dispatch] = useReducer(reducer, initialState);
  const setLoginErr = (payload: string) =>
    dispatch({ type: 'NON_FIELD_ERRORS', payload });
  return {
    errMsg,
    setLoginErr,
  };
};

export default useSignInErr;
