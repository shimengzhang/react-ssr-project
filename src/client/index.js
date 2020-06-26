import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Routes from '../Routes';
import { renderRoutes } from 'react-router-config';
import routes from '../Routes';
import { getClientStore } from '../store';

const App = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <div>
      {
        renderRoutes(routes)
        // routes.map((route) => (
        //   <Route {...route}/>
        // ))
      }
      </div>
    </BrowserRouter>
  </Provider>
);

// ReactDom.render(<App />, document.getElementById('root'));
ReactDom.hydrate(<App />, document.getElementById('root'));
