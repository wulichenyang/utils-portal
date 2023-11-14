import { LOCAL_FORAGE_KEY_ENUM } from '@/constants/localforage';
import localforage from 'localforage';

export const getToken = () => {
  return localforage
    .getItem(LOCAL_FORAGE_KEY_ENUM.ACCESS_TOKEN_KEY)
    .then((res) => {
      return res || 'access_unknown_token';
    });
};
