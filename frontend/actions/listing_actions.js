import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});
const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

export const fetchListings = () => dispatch => (
  ListingAPIUtil.fetchListings().then(listings => dispatch(receiveListings(listings)))
);
export const fetchListing = id => dispatch => (
  ListingAPIUtil.fetchListing(id).then(listing => dispatch(receiveListing(listing)))
);
