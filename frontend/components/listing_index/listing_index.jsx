import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from '../listing_map/listing_map';

class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }
  render () {
    return (
      <div className="listing-page">
        <div className="listing-index">
          <ul>
            {this.props.listings.map(listing => (
                <ListingIndexItem
                  key={listing.id}
                  listing={listing} />)
                )
            }
          </ul>
        </div>
        <div className="map-index">
          <ListingMap />
        </div>
      </div>
    );
  }
}

export default ListingIndex;
