import React from 'react';

import ListingIndex from './listing_index';
import ListingMap from './../listing_map/listing_map';

const ListingPage = (props) => (
  <div className="listings-div">
    <ListingIndex
      listings={props.listings}
      fetchListings={props.fetchListings}
    />
    <ListingMap listings={props.listings} />
  </div>
);

export default ListingPage;
