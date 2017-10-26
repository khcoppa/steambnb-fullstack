import React from 'react';
import ReactDOM from 'react-dom';

import { login, signup } from './actions/session_actions';

import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  // just for testing!
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
