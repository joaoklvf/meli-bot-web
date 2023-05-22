import { api } from './api';

export const getToken = async (refreshToken: string) => {
  try {
    const { data } = await api.post('meli/token', null, { params: { code: refreshToken } });
    if (!!data.access_token)
      return data;
    window.location.href = ('https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=7653033061543176&redirect_uri=http://localhost:5173/meli');
  }
  catch (e: any) {
    throw new Error(e);
  }
}

export const getUserTest = async (refreshToken: string | null, token: string, setToken: (value: string) => void) => {
  let user;
  try {
    const { data } = await api.post('meli/user-test', null, { params: { token } });
    console.log('data', data);
    if (!!data.id) {
      return data;
    }
    if (!refreshToken) {
      throw new Error("Refresh token null!");
    }
    await getToken(refreshToken).then(async ({ access_token }) => {
      setToken(access_token);
      const newRequest = await api.post('meli/user-test', null, { params: { token: access_token } });
      user = newRequest.data;
    });

    return user;
  }
  catch (e: any) {
    throw new Error(e);
  }
}