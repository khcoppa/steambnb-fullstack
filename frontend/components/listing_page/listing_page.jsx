import React from 'react';

import ListingIndex from './listing_index';
import ListingMap from './../listing_map/listing_map';

const ListingPage = (props) => (
  <div className="listings-div">
    <div className="left-listings">
      <ListingIndex
        listings={props.listings}
        fetchListings={props.fetchListings}
      />
    </div>
    <div className="right-map">
      <ListingMap listings={props.listings} />
    </div>
  </div>
);

export default ListingPage;
