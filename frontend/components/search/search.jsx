import React from 'react';

import FilterBar from '../filter_bar/filter_bar';
import ListingIndex from '../listing_page/listing_index';
import ListingMap from '../listing_map/listing_map';

const Search = (props) => {
  return (
    <div id="listings-div">
      <FilterBar />
      <ListingIndex
        listings={props.listings}
      />
      <ListingMap
        listings={props.listings}
        updateFilter={props.updateFilter}
      />
    </div>
  );
};

export default Search;
