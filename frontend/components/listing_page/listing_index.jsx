import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from '../listing_map/listing_map';
// class ListingIndex extends React.Component {
//   render () {
//     debugger
//     return (
//       <div className="listing-index">
//         <ul>
//           {this.props.listings.map(listing => (
//               <ListingIndexItem
//                 key={listing.id}
//                 listing={listing}
//               />)
//             )
//           }
//         </ul>
//       </div>
//     );
//   }
// }

const ListingIndex = (props) => {
  return (
    <div className="listing-index">
      <ul>
        {props.listings.map(listing => (
            <ListingIndexItem
              key={listing.id}
              listing={listing}
            />))
        }
      </ul>
    </div>
  );
};

export default ListingIndex;
