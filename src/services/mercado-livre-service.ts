import { PostProduct } from '../pages/Meli/components/ProductsComponent/useProduct';
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

export const getUserTest = async (token: string | null) => {
  if (!token)
    throw new Error("Token null getSites");

  try {
    const { data } = await api.post('meli/user-test', null, { params: { token } });
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

export const requestProduct = async (product: PostProduct) => {
  if (!product.token)
    throw new Error("Token null requestProduct");

  try {
    const { data } = await api.post('meli/product', product);
    return data;
  }
  catch (e: any) {
    throw new Error(e);
  }
}