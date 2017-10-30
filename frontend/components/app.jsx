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
import NavbarSearchContainer from './navbar/navbar_search_container';
import Homepage from './homepage/homepage';
import loggedIn from './blank/loggedIn';
import loggedOut from './blank/loggedOut';
import ListingPageContainer from './listing_page/listing_page_container';
import ListingShowContainer from './listing_show/listing_show_container';

const App = () => (
  <div id="app">
    <header className="app-header">
      <Switch>
        <Route exact path="/" component={NavbarHomeContainer} />
        <Route path="/" component={NavbarSearchContainer} />
      </Switch>
    </header>
    <Switch>
      <Route exact path="/" component={Homepage} />
      // make AuthRoute

      <Route path="/listings/:listingId" component={ListingShowContainer} />
      <Route path="/listings" component={ListingPageContainer} />


      <Route exact path="/loggedIn" component={loggedIn} />
      <Route exact path="/loggedOut" component={loggedOut} />
    </Switch>
  </div>
);

export default App;
