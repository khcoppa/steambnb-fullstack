import React from 'react';
import { Link } from 'react-router-dom';
import ListingMap from '../listing_map/listing_map';
import ReviewShow from './review_show';

const reviewList = (reviews = []) => (
  reviews.map(review => (
    <ReviewShow
      key={review.id}
      rating={review.rating}
      body={review.body}
    />
  ))
);

class ListingDetails extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    if (!this.props.listing) {
      this.props.fetchListing(this.props.listingId);
    }
  }

  render() {
    debugger
    const listingArr = [this.props.listing];
    if (this.props.listing) {
      return (
        <div className="listing-information">
          <div className="anchors">
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>

          <div className="overview">
            <a name="overview"></a>
            <h1>{this.props.listing.title}</h1>
            <p>{this.props.listing.location}</p>
            <ul>
              <li><i className="fa fa-users"></i> {this.props.listing.guests} guests</li>
              <li><i className="fa fa-bold"></i> {this.props.listing.bedrooms} bedrooms</li>
              <li><i className="fa fa-bed"></i> {this.props.listing.beds} beds</li>
              <li><i className="fa fa-bath"></i> {this.props.listing.bath} baths</li>
            </ul>
          </div>

          <div className="reviews">
            <a name="reviews"></a>
            <h2>{this.props.listing.reviews.length} Reviews</h2>
            {reviewList(this.props.listing.reviews)}
          </div>

          <a name="location"></a>
          <ListingMap
            listings={listingArr}
          />
        </div>
      );
    } else {
      return(
        <div> loading </div>
      );
    }
  }
}

export default ListingDetails;
