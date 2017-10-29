import React from 'react';
import { Link } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listing_id: this.props.listingId,
      booker_id: this.props.bookerId,
      start_date: "",
      end_date: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  renderErrors() {
     if (this.props.errors.responseJSON) {
       return (<p>{this.props.errors.responseJSON}</p>);
     }
   }
   update(field) {
     return e => this.setState({[field]: e.currentTarget.value});
   }
   handleSubmit(e) {
     e.preventDefault();
     const booking = this.state;
     debugger
     this.props.createBooking(booking);
   }
  render() {
    return(
      <div className="booking-form">
        <form onSubmit={this.handleSubmit}>
          <div className="start-date-input">
            <label>Start Date
              <input
                type="date"
                value={this.state.start_date}
                onChange={this.update('start_date')} />
            </label>
          </div>
          <div className="end-date-input">
            <label>End Date
              <input
                type="date"
                value={this.state.end_date}
                onChange={this.update('end_date')} />
            </label>
          </div>
          <button id="request-button">Request Booking</button>
        </form>
      </div>
    );
  }
}

export default BookingForm;
