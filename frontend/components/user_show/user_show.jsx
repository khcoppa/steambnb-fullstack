import React from 'react';
import { Link } from 'react-router-dom';
import BookingDetails from './booking_details';

class UserShow extends React.Component {
  render() {
    return (
      <div className="booking-list">
        <h1>Bookings for {this.props.currentUser.username}</h1>
        <ul>
          {this.props.bookings.map((booking, idx) => (
            <BookingDetails
              key={booking.id}
              booking={booking}
              listing={this.props.listings[idx]} />))
          }
        </ul>
      </div>
    );
  }
}

export default UserShow;
