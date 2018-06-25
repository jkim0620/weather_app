import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import City from './components/City/City';
import './assets/css/style.css';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route exact path='/:id' component={City} />
    </Switch>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
