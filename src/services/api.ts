import axios from "axios";
import { getLocalStorageRefreshToken, getLocalStorageToken, removeLocalStorageToken, setLocalStorageToken } from "../util/token";
import { getToken } from "./mercado-livre-service";

export const api = axios.create({
  baseURL: "http://localhost:8080/api/",
  maxRedirects: 3,
});

api.interceptors.request.use(
  async (request) => {
    const localToken = getLocalStorageToken();
    if (localToken) {
      const token = JSON.parse(localToken);
      request.headers['Authorization'] = `Bearer ${token.access_token}`;
    }

    return request;
  },
  async (error) => {
    console.log('error', error)
    Promise.reject(error)
  }
);

api.interceptors.response.use(
  async (response) => {
    if (response.data.status === 401) {
      removeLocalStorageToken();
      throw new Error(response.data.message);
    }
    return response;
  },
  async (error) => {
    if (error.response.status === 400 || error.response.data.status === '401') {
      const refreshToken = getLocalStorageRefreshToken();
      if (!refreshToken) {
        window.location.href = 'http://localhost:5173';
        return Promise.reject('undefined token');
      }
      const newToken = await getToken(refreshToken);
      if (newToken.error) {
        window.location.href = 'http://localhost:5173';
        return Promise.reject('invalid refresh_token');
      }
      setLocalStorageToken(JSON.stringify(newToken));
      error.config.headers['Authorization'] = newToken.access_token;
      return Promise.resolve(error.config);
    }
  }
);