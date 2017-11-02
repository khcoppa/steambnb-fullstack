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
        <p>Book experiences<br />at the worlds best saunas.</p>

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
        <Link to={'/listings'}><h4>Explore Listings</h4></Link>

      </div>
    );
  }
}

export default Homepage;
