import { api } from './api';
import { Question } from '../interfaces/question';

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

export const requestQuestions = async (userId: number) => {
  try {
    const { data } = await api.get<Question[]>('meli/questions', { params: { userId } });
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
}