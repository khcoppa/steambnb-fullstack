import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavbarHomeContainer from './navbar/navbar_home_container';
import Homepage from './homepage/homepage';
import loggedIn from './blank/loggedIn';
const App = () => (
  <div className="app-component">
    <header className="app-header">
      <NavbarHomeContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/loggedIn" component={loggedIn} />
    </Switch>
  </div>
);

export default App;
