import React from 'react';
import { Link } from 'react-router-dom';

class BookingDetails extends React.Component {
  render() {
    return (
      <li className="listing-item">
          <img src={this.props.listing.image_url} />
          <h4>Sauna {this.props.listing.beds} beds</h4>
          <h3>{this.props.listing.title}</h3>
          <p>Check in: {this.props.booking.start_date}<br />Check out: {this.props.booking.end_date}</p>
          <Link to={`/listings/${this.props.listing.id}/reviews`}>Write A Review</Link>
      </li>
    );
  }
}

export default BookingDetails;
