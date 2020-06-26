import React from 'react';

const NotFound = (props) => {
  // 只在服务器端执行，因为客户端不需要，没有路由，不会走到 NotFound
  if (props.staticContext) {
    props.staticContext.NotFound = true;
  }

  return (
  <div>
    <h1>404, sorry</h1>
  </div>
  );
};

export default NotFound;
