import React from 'react';
import { Link } from 'react-router-dom';

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
    if (this.props.listing) {
      return (
        <div id="listing-show-details">
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
            </div>

            <div className="location">
              <a name="location"></a>
            </div>
          </div>
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
