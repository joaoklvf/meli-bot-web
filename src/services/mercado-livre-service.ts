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

export const requestSites = async () => {
  try {
    const { data } = await api.post('meli/sites', null);
    return data;
  }
  catch (e: any) {
    throw new Error(e);
  }
}

export const requestQuestions = async () => {
  try {
    const { data } = await api.get('meli/questions');
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
}