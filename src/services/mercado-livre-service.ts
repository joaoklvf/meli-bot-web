import { api } from './api';

export const getToken = async (refreshToken: string) => {
  try {
    console.log(refreshToken, 'refreshToken')
    const { data } = await api.post('meli/token', null, { params: { code: refreshToken } });
    return data;
  }
  catch (e: any) {
    throw new Error(e);
  }
}