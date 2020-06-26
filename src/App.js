import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';

const App = (props) => {
  console.log(props.route.routes);
  return (<div>
    <Header />
    {renderRoutes(props.route.routes)}
  </div>);
};

export default App;
