import { useEffect } from 'react';
import { history } from 'umi';

const NotFound = () => {
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath) {
      history.replace(redirectPath);
      sessionStorage.removeItem('redirect');
    }
  }, []);
  return (
    <div>
      <h1>404 - 找不到该页面</h1>
    </div>
  );
};

export default NotFound;
