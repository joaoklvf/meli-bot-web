import { api } from './api';

export const getToken = async (refreshToken: string) => {
  try {
    const { data } = await api.post('meli/token', null, { params: { code: refreshToken } });
    return data;
  }
  catch (e: any) {
    throw new Error(e);
  }
}

export const getUserTest = async (token: string) => {
  try {
    const { data } = await api.post('meli/user-test', null, { params: { token } });
    return data;
  }
  catch (e: any) {
    throw new Error(e);
  }
}