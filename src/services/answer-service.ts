import { api } from './api';
import { Answer } from '../interfaces/answer';

export const createChatGptAnswer = async (questionId: number) => {
  try {
    const { data } = await api.post<Answer>('answer', null, { params: { questionId } });
    return data;
  }
  catch (e: any) {
    throw new Error(e);
  }
}

export const createUserAnswer = async (questionId: number, userAnswer: string) => {
  try {
    const { data } = await api.post<Answer>('answer/user', null, { params: { questionId, userAnswer } });
    return data;
  }
  catch (e: any) {
    throw new Error(e);
  }
}

export const approveAnswer = async (questionId: number) => {
  try {
    const { data } = await api.patch<Answer>('answer', null, { params: { questionId } });
    return data;
  }
  catch (e: any) {
    throw new Error(e);
  }
}