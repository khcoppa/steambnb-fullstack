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
import ListingIndexContainer from './listing_index/listing_index_container';

const App = () => (
  <div className="app-component">
    <header className="app-header">
      <NavbarHomeContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/loggedIn" component={loggedIn} />
      <Route path="/listings" component={ListingIndexContainer} />
    </Switch>
  </div>
);

export default App;
