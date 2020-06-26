import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export const render = (req, store, routes) => {
  // 如果在这里，能拿到异步数据，并填充到 store 中，服务端渲染时就有数据了
  // store 里填充什么数据，需要结合用户请求地址和路由，做判断
  console.log('store', store.getState());
  const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
          {
            renderRoutes(routes)
            // routes.map((route) => (
            //   <Route {...route}/>
            // ))
          }
          </div>
        </StaticRouter>
      </Provider>
  ));

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
      </script>
      <script src='./index.js'></script>
    </body>
    </html>
  `;
};
