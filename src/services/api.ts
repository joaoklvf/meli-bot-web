import axios from "axios";
import { getLocalStorageRefreshToken, getLocalStorageToken } from "../util/token";
import { getToken } from "./mercado-livre-service";

export const api = axios.create({
  baseURL: "http://localhost:8080/api/",
  maxRedirects: 3,
});

api.interceptors.request.use(async (config) => {
  const localToken = getLocalStorageToken();
  if (localToken) {
    const token = JSON.parse(localToken);
    config.headers['Authorization'] = `Bearer ${token.access_token}`;
  }

  return config
},
  error => {
    Promise.reject(error)
  });
