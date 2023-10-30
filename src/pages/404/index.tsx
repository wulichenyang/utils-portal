import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    // An example: If you host your site at /my-site/:
    // Set segmentCount to 1
    var segmentCount = 0;
    var l = window.location;
    l.replace(
      l.protocol +
        '//' +
        l.hostname +
        (l.port ? ':' + l.port : '') +
        l.pathname
          .split('/')
          .slice(0, 1 + segmentCount)
          .join('/') +
        '/?p=/' +
        l.pathname
          .slice(1)
          .split('/')
          .slice(segmentCount)
          .join('/')
          .replace(/&/g, '~and~') +
        (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash,
    );
  }, []);
  return (
    <div>
      <h1>404 - 找不到该页面</h1>
    </div>
  );
};

export default NotFound;
