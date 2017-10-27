import React from 'react';
import { Link } from 'react-router-dom';

import ListingDetails from './listing_details';

const ListingShow = (props) => {
  return(
    <div className="listing-show-page">
      <ListingDetails
        listing={props.listing}
        listingId={props.listingId}
        fetchListing={props.fetchListing}
      />
    </div>
  );
};

export default ListingShow;
