import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from '../listing_map/listing_map';

const ListingIndex = (props) => {
  return (
    <div className="listing-index">
      <ul>
        {props.listings.map(listing => (
          <ListingIndexItem
            key={listing.id}
            listing={listing} />)
          )
        }
      </ul>
    </div>
  );
};

export default ListingIndex;
