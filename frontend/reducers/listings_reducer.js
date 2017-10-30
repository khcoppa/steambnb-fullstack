import merge from 'lodash/merge';
import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  RECEIVE_REVIEW
} from '../actions/listing_actions';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return merge({}, state, {[action.listing.id]: action.listing});
    case RECEIVE_REVIEW:
      const review = action.review;
      newState[review.listing_id].reviews.push(review)
      return newState;
    default:
      return state;
  }
};

export default ListingsReducer;
