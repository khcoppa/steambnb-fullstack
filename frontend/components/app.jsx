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
import ListingPageContainer from './listing_page/listing_page_container';
import ListingShowContainer from './listing_show/listing_show_container';

const App = () => (
  <div id="app">
    <header className="app-header">
      <NavbarHomeContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Homepage} />
      // make AuthRoute
      <Route path="/loggedIn" component={loggedIn} />

      <Route path="/listings/:listingId" component={ListingShowContainer} />
      <Route path="/listings" component={ListingPageContainer} />
    </Switch>
  </div>
);

export default App;
