import React from 'react';
import { Link } from 'react-router-dom';

class LoggedIn extends React.Component {
  render () {
    return (
      <div className="home-content">
        <h1>You are Logged In</h1>
        <p>Book experiences at the worlds best saunas and hotsprings.</p>
      </div>
    );
  }
}

export default LoggedIn;
