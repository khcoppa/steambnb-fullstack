import React from 'react';

import FilterBar from '../filter_bar/filter_bar';
import ListingIndex from '../listing_page/listing_index';
import ListingMap from '../listing_map/listing_map';
import FilterForm from './filter_form';

const Search = (props) => {
  return (
    <div id="listings-div">
      <FilterBar />
      <FilterForm
        start_date={props.start_date}
        end_date={props.end_date}
        location={props.location}
        updateFilter={props.updateFilter}
      />
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
