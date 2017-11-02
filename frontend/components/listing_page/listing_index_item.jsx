import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const averageRating = (reviews = []) => {
  let ratings = 0;
  let count = 0;
  reviews.forEach(review => {
    ratings += review.rating;
    count += 1;
  });
  let average = (ratings/count);
  return average;
};

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stars = [];
    for (let i=0; i < averageRating(this.props.listing.reviews); i++) {
      stars.push(<i className="fa fa-star"></i>);
    }
    return (
      <li className="listing-item">
        <Link to={`/listings/${this.props.listing.id}`}>
          <img src={this.props.listing.image_url} />
          <h4>Sauna {this.props.listing.beds} beds</h4>
          <h3>{this.props.listing.title}</h3>
          <p>From ${this.props.listing.price} per night</p>
          <h5>{stars} ({this.props.listing.reviews.length})</h5>
        </Link>
      </li>
    );
  }
}

export default withRouter(ListingIndexItem);

// Link to={`/listings/${this.props.listing.id}`}
