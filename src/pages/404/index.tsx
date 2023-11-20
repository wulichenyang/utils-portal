import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    if (ENV !== 'dev' && PROJECT_NAME) {
      location.replace(`/${PROJECT_NAME}`);
    }
  }, []);
  return (
    <div>
      <h1>404 - 找不到该页面</h1>
    </div>
  );
};

export default NotFound;
