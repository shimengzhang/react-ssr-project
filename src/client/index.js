import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Routes from '../Routes';

const App = () => (
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
);

// ReactDom.render(<App />, document.getElementById('root'));
ReactDom.hydrate(<App />, document.getElementById('root'));
