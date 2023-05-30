import { api } from './api';

export const getToken = async (refreshToken: string) => {
  try {
    const { data } = await api.post('meli/token', null, { params: { code: refreshToken } });
    if (!!data.access_token)
      return data;
    window.location.href = ('https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=4052850536369657&redirect_uri=http://localhost:5173/meli');
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