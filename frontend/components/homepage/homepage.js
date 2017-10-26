import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  render () {
    return (
      <div className="home-content">
        <h1>Steambnb</h1>
        <p>Book experiences at the worlds best saunas and hotsprings.</p>
        <Link to={`/listings`}>Check out Listings</Link>
      </div>
    );
  }
}

export default Homepage;
