import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import NewYork from './components/City/NewYork';
import './assets/css/style.css';

// <Route exact path='/5128638' component={NewYork}/>
const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/5128638' component={NewYork} />
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
