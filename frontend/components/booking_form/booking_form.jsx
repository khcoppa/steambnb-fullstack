import React from 'react';
import { Link } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props){
    super(props);
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

   renderErrors() {
      if (this.props.errors) {
        return (<p>{this.props.errors}</p>);
      }
    }

   navigateToListingIndex() {
     const url = '/listings';
     this.props.history.push(url);
   }
   handleSubmit(e) {
     e.preventDefault();
     const booking = this.state;
     this.props.createBooking(booking).then(this.navigateToListingIndex);
   }
  render() {
    const options = [];
    for (let i=0; i < this.props.listing.guests; i++) {
      if (i === 0) {
        options.push(<option value={i}>{i+1} guest</option>)
      } else {
        options.push(<option value={i}>{i+1} guests</option>)
      }
    }
    return(
      <div className="booking-form">
        <div className="form-header">
          <h2>${this.props.listing.price}</h2>
          <h3>per night</h3>

        </div>

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <div className="inputs">
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
            <div className="guests">
              <label>Guests</label>
                <br />
                <select name="guests">
                  {options}
                </select>
            </div>
          </div>
          <button id="request-button" type="submit">Request to Book</button>
        </form>
      </div>
    );
  }
}

export default BookingForm;
