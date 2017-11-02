import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    bookings: state.session.currentUser.bookings,
    listings: state.session.currentUser.booked_listings
  }
}

export default connect(
  mapStateToProps,
  null
)(UserShow);
