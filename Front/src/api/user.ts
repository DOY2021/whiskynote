import axios from 'axios';

type UserDetails = {
  pk?: string;
  username: string;
  email?: string;
  first_name: string;
  last_name: string;
};

const getUserDetails = async () => {
  try {
    const response = await axios.get('/api/user/');
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const putUserDetails = async (userDetails: UserDetails) => {
  try {
    const response = await axios.put('/api/user/', userDetails);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const patchUserDetails = async (userDetails: UserDetails) => {
  try {
    const response = await axios.patch('/api/user/', userDetails);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const userAPI = {
  getUserDetails,
  putUserDetails,
  patchUserDetails,
};
