import React from 'react';
import { Link } from 'react-router-dom';

import ListingDetails from './listing_details';
import BookingForm from '../booking_form/booking_form';

class ListingShow extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    if (!this.props.listing) {
      this.props.fetchListing(this.props.listingId);
    }
  }
  render() {
   if (this.props.listing && this.props.user) {
     return(
        <div id="listing-show-page">
          <div className="listing-img">
            <img src={this.props.listing.image_url} />
          </div>
          <div id="listing-show-details">
            <ListingDetails
              listing={this.props.listing}
              listingId={this.props.listingId}
              fetchListing={this.props.fetchListing}
              updateFilter={this.props.updateFilter}
              history={this.props.history}
            />
          </div>

          <BookingForm
            userId={this.props.user.id}
            listingId={this.props.listingId}
            createBooking={this.props.createBooking}
            listing={this.props.listing}
            history={this.props.history}
          />
        </div>
      );
    } else {
      return(<p>Loading...</p>);
    }
  }
}

export default ListingShow;
