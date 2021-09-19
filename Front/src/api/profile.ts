import { client } from './client';

type ProfileCreate = {
  nickname: string;
  bio?: string;
  profile_photo?: File;
};

type ProfileParam = {
  nickname: string;
  bio?: string;
  profile_photo?: string;
  id: number;
};

const getAllProfile = async () => {
  try {
    const response = await client.get('/api/profile/all/');
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const createProfile = async (profileData: FormData) => {
  try {
    const response = await client.post('/api/profile/create/', profileData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

const getProfile = async (id: number) => {
  try {
    const response = await client.get(`/api/${id}/profile`, {});
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
const deleteProfile = async (id: number) => {
  try {
    const response = await client.delete(`/api/profile/${id}/`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const putProfile = async (id: number, profileData: ProfileParam) => {
  try {
    const response = await client.put(`/api/profile/${id}/`, profileData);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
const patchProfile = async (id: number, profileData: ProfileParam) => {
  try {
    const response = await client.patch(`/api/profile/${id}/`, profileData);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const profileAPI = {
  getAllProfile,
  getProfile,
  deleteProfile,
  putProfile,
  patchProfile,
  createProfile,
};
