import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { actionCreators } from './components/Header/store';

const App = (props) => (
  <div>
    <Header />
    {renderRoutes(props.route.routes)}
  </div>
);

App.loadData = () => (store) => store.dispatch(actionCreators.getHeaderInfo());

export default App;
