import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import App from './App';
// import Home from './components/Home/Home';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
