import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.userId,
      listing_id: this.props.listingId,
      body: "",
      rating: 5
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   update(field) {
     return e => this.setState({[field]: e.currentTarget.value});
   }
   handleSubmit(e) {
     e.preventDefault();
     const booking = this.state;
     this.props.createBooking(booking);
   }
  render() {
    return(
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <div className="check-in">
            <label>Rating</label>
              <br />
              <input
                type="radio"
                value={this.state.rating}
                onChange={this.update('rating')}
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
          <button id="request-button">Book</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
