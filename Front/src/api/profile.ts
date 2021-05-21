import { client } from './client';

type ProfileCreate = {
  nickname: string;
  bio?: string;
  profile_photo?: File;
};

type ProfileParam = {
  nickname: string;
  bio?: string;
  profile_photo?: File;
  id: number;
};

const getAllProfile = async () => {
  try {
    const response = await client.get('/api/profile/all');
    return response;
  } catch (e) {
    console.log(e);
  }
};

const createProfile = async (profileData: ProfileCreate) => {
  try {
    const response = await client.post('/api/profile/create', profileData);
    return response;
  } catch (e) {
    console.log(e);
  }
};

const getProfile = async (id: number) => {
  try {
    const response = await client.get(`/api/profile/${id}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
const deleteProfile = async (id: number) => {
  try {
    const response = await client.delete(`/api/profile/${id}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};
const putProfile = async (id: number, profileData: ProfileParam) => {
  try {
    const response = await client.put(`/api/profile/${id}`, profileData);
    return response;
  } catch (e) {
    console.log(e);
  }
};
const patchProfile = async (id: number, profileData: ProfileParam) => {
  try {
    const response = await client.patch(`/api/profile/${id}`, profileData);
    return response;
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
