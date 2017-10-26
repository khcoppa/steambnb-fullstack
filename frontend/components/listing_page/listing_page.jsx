import React from 'react';

import FilterBar from './../filter_bar/filter_bar';
import ListingIndex from './listing_index';
import ListingMap from './../listing_map/listing_map';

const ListingPage = (props) => (
  <div className="listings-div">
    <FilterBar />
    <ListingIndex
      listings={props.listings}
      fetchListings={props.fetchListings}
    />
    <ListingMap listings={props.listings} />
  </div>
);

export default ListingPage;
