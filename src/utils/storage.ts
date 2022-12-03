const TOKEN_STORAGE_KEY = 'ACCESS_TOKEN';

export const getToken = () => localStorage.getItem(TOKEN_STORAGE_KEY);

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const deleteToken = () => {
  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
};
