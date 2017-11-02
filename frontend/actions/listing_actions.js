import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";

const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});
const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});
const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});
const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});
const receiveErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
});

export const fetchListings = filters => dispatch => (
  ListingAPIUtil.fetchListings(filters)
    .then(listings => dispatch(receiveListings(listings)),
    (errors) => dispatch(receiveErrors(errors)))
);
export const fetchListing = id => dispatch => (
  ListingAPIUtil.fetchListing(id)
    .then(listing => dispatch(receiveListing(listing)),
    (errors) => dispatch(receiveErrors(errors)))
);
export const createReview = review => dispatch => (
  ListingAPIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),
    (errors) => dispatch(receiveErrors(errors)))
);
export const createBooking = booking => dispatch => (
  ListingAPIUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)),
    (errors) => dispatch(receiveErrors(errors)))
);
