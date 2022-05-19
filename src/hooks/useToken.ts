import {useState} from 'react';

interface IUseTokenRes {
  token: string | null;
  setToken: (userToken: { token: string; }) => void;
}

export const useToken = (): IUseTokenRes => {
  const getToken = () => {
    return localStorage.getItem('token');
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: { token: string; }) => {
    localStorage.setItem('token', JSON.stringify(userToken.token));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}