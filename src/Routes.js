import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Write from './containers/Write';
import NotFound from './containers/NotFound';
import App from './App';

export default [
  {
    path: '/', // 这一级不要使用 exact
    component: App,
    key: 'app',
    loadData: App.loadData(),
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData(),
        key: 'home',
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login',
      },
      {
        path: '/write',
        component: Write,
        exact: true,
        key: 'write',
      },
      {
        component: NotFound,
      },
    ],
  },
];

// export default (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// );
