/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios';
import { RegisterDataProp } from '../Feature/SignUp/SignUp';

type LoginParam = {
  email: string;
  password: string;
};

type RegisterParam = {
  nickname: string;
  email: string;
  password1: string;
  password2: string;
};

type NewPassword = {
  new_password1: string;
  new_password2: string;
};

const postLogin = async (loginParam: LoginParam) => {
  try {
    const response = await axios.post('/api/login/', loginParam);
    return {
      type: 'success',
      data: response.data,
    };
  } catch (e) {
    return {
      type: 'fail',
      data: e,
    };
  }
};

const postRegister = async (
  registerParam: RegisterParam,
): Promise<RegisterDataProp> => {
  try {
    const response = await axios.post('/api/register/', registerParam);
    return {
      type: 'success',
      data: response.data,
    };
  } catch (e) {
    return {
      type: 'fail',
      data: e.response.data,
    };
  }
};

const postLogout = async () => {
  try {
    const response = await axios.post('/api/logout/');
    return {
      type: 'success',
      data: response.data,
    };
  } catch (e) {
    return {
      type: 'fail',
      data: e,
    };
  }
};

const postPasswordChange = async (newPassWord: NewPassword) => {
  try {
    const response = await axios.post('/api/password/change/', newPassWord);
    return {
      type: 'success',
      data: response.data,
    };
  } catch (e) {
    return {
      type: 'fail',
      data: e,
    };
  }
};

const postPasswordReset = async (email: string) => {
  try {
    const response = await axios.post('/api/password/reset/', email);
    return {
      type: 'success',
      data: response.data,
    };
  } catch (e) {
    return {
      type: 'fail',
      data: e,
    };
  }
};

export const authAPI = {
  postLogin,
  postLogout,
  postRegister,
  postPasswordChange,
  postPasswordReset,
};
