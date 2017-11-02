import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import NavbarHomeContainer from './navbar/navbar_home_container';
import NavbarSearchContainer from './navbar/navbar_search_container';
import HomepageContainer from './homepage/homepage_container';
import HomepageLogin from './homepage/homepage_login';
import SearchContainer from './search/search_container';
import ListingShowContainer from './listing_show/listing_show_container';
import ReviewFormContainer from './review_form/review_form_container';
import UserShowContainer from './user_show/user_show_container';

const App = () => (
  <div id="app">
    <header className="app-header">
      <Switch>
        <Route exact path="/" component={NavbarHomeContainer} />
        <Route path="/" component={NavbarSearchContainer} />
      </Switch>
    </header>
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <Route exact path="/login" component={HomepageLogin} />

      <ProtectedRoute path="/user/:userId" component={UserShowContainer} />
      <ProtectedRoute path="/listings/:listingId/reviews" component={ReviewFormContainer} />
      <ProtectedRoute path="/listings/:listingId" component={ListingShowContainer} />
      <ProtectedRoute path="/listings" component={SearchContainer} />
    </Switch>
  </div>
);

export default App;
