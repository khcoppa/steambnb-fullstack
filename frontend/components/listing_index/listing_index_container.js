import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { fetchListings, fetchListing } from '../../actions/listing_actions';

const mapStateToProps = state => ({
    listings: Object.keys(state.entities.listings).map(id => state.entities.listings[id])
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingIndex);
