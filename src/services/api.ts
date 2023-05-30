import axios from "axios";
import { getLocalStorageRefreshToken, getLocalStorageToken } from "../util/token";
import { getToken } from "./mercado-livre-service";

export const api = axios.create({
  baseURL: "http://localhost:8080/api/"
});

api.interceptors.request.use(config => {
  const token = getLocalStorageToken();
  console.log(token, 'newToken')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  else {
    window.location.href = ('https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=4052850536369657&redirect_uri=http://localhost:5173/meli');
  }
  // config.headers['Content-Type'] = 'application/json';
  return config
},
  error => {
    Promise.reject(error)
  });
