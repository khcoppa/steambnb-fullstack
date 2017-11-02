import {  RECEIVE_LISTINGS,
          RECEIVE_LISTING,
          RECEIVE_REVIEW,
          RECEIVE_BOOKING,
          RECEIVE_LISTING_ERRORS
        } from '../actions/listing_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    case RECEIVE_LISTINGS:
      return [];
    case RECEIVE_LISTING:
      return [];
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_BOOKING:
      return [];
    default:
      return state;
  }
};
