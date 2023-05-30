const TOKEN_NAME = 'meli-token';
const REFRESH_TOKEN_NAME = 'meli-refresh-token';

export const getLocalStorageToken = () =>
  localStorage.getItem(TOKEN_NAME);

export const setLocalStorageToken = (token: string) =>
  localStorage.setItem(TOKEN_NAME, token);

export const getLocalStorageRefreshToken = () =>
  localStorage.getItem(REFRESH_TOKEN_NAME);

export const setLocalStorageRefreshToken = (refreshToken: string) =>
  localStorage.setItem(REFRESH_TOKEN_NAME, refreshToken);