import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/listings/${this.props.listing.id}`}>
        <li className="listing-item">
          <img src={this.props.listing.image_url} />
          <h3>From {this.props.listing.price} per night : {this.props.listing.title}</h3>
          <p>{this.props.listing.beds} beds</p>
        </li>
      </Link>
    );
  }
}

export default withRouter(ListingIndexItem);
