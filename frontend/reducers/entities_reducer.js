import { combineReducers } from 'redux';
import listings from './listings_reducer';
import bookings from './bookings_reducer';

export default combineReducers({
  listings,
  bookings
});
