import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location_search: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  navigateToListingIndex() {
    const url = '/listings';
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter('location', this.state.location_search);
    this.setState({['location_search']: ''});
    this.navigateToListingIndex();
  }

  render() {
    return (
      <div className="home-content">
        <h1>Steambnb</h1>
        <p>Book time to relax<br /> at premier spas and saunas.</p>

        <div className='search-bar-home'>
          <div className='search-icon-home'>
            <i className="fa fa-search"></i>
          </div>
          <div className='search-input-home'>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.location_search}
                onChange={this.update('location_search')}
                placeholder="Anywhere"
              />
              <button id="search">Search</button>
            </form>
          </div>
        </div>
        <h4>Explore Steambnb</h4>
        <Link to={`/listings`}>
          <div className="listings-button">
            <img src="https://i.pinimg.com/originals/39/2f/bc/392fbca43c9f32ddf836903f0dbde545.jpg" />
            <h6>Listings</h6>
          </div>
        </Link>
      </div>
    );
  }
}

export default Homepage;
