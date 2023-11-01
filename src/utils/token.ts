import localforage from 'localforage';

export const getToken = () => {
  return localforage.getItem('access_token').then((res) => {
    return res || 'access_unknown_token';
  });
};
