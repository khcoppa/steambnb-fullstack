import merge from 'lodash/merge';
import { RECEIVE_BOOKING } from '../actions/booking_actions';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING:
      debugger
      return merge({}, state, {[action.booking.id]: action.booking});
    default:
      return state;
  }
};

export default BookingsReducer;
