import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});
const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});
const receiveReview = review => ({
  type: 'RECEIVE_REVIEW',
  review
});

export const fetchListings = () => dispatch => (
  ListingAPIUtil.fetchListings().then(listings => dispatch(receiveListings(listings)))
);
export const fetchListing = id => dispatch => (
  ListingAPIUtil.fetchListing(id).then(listing => dispatch(receiveListing(listing)))
);
export const createReview = review => dispatch => (
  ListingAPIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);
