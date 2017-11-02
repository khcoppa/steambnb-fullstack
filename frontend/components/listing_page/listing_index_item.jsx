import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="listing-item">
        <Link to={`/listings/${this.props.listing.id}`}>
          <img src={this.props.listing.image_url} />
          <h4>Sauna {this.props.listing.beds} beds</h4>
          <h3>{this.props.listing.title}</h3>
          <p>From ${this.props.listing.price} per night</p>
          <h5>{Math.round(this.props.listing.average_rating * 10) / 10} star listing</h5>
        </Link>
      </li>
    );
  }
}

export default withRouter(ListingIndexItem);

// Link to={`/listings/${this.props.listing.id}`}
