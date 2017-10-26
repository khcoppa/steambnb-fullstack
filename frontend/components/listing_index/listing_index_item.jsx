import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ListingIndexItem = (props) => {
  return (
    <li>
      <img src={props.listing.image_url} />
      <p>Beds: {props.listing.beds}</p>
      <Link to={`/listings/${props.listing.id}`}>{props.listing.title}</Link>
      <p>From {props.listing.price} per night</p>
    </li>
  );
};

export default withRouter(ListingIndexItem);
