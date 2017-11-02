import React from 'react';
import { Link } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props){
    super(props);
    debugger
    this.state = {
      listing_id: this.props.listingId,
      booker_id: this.props.userId,
      start_date: "",
      end_date: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToListingIndex = this.navigateToListingIndex.bind(this);
  }

   update(field) {
     return e => this.setState({[field]: e.currentTarget.value});
   }
   navigateToListingIndex() {
     const url = '/listings';
     debugger
     this.props.history.push(url);
   }
   handleSubmit(e) {
     e.preventDefault();
     const booking = this.state;
     this.props.createBooking(booking);
     this.navigateToListingIndex();
   }
  render() {
    return(
      <div className="booking-form">
        <h3>From ${this.props.listing.price} per night</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="check-in">
            <label>Check In</label>
              <br />
              <input
                type="date"
                value={this.state.start_date}
                onChange={this.update('start_date')}
              />
          </div>
          <div className="check-out">
            <label>Check Out</label>
              <br />
              <input
                type="date"
                value={this.state.end_date}
                onChange={this.update('end_date')}
              />
          </div>
          <button id="request-button" type="submit">Book</button>
        </form>
      </div>
    );
  }
}

export default BookingForm;
