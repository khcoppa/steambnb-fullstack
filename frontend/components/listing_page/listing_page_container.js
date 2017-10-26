import { connect } from 'react-redux';
import { fetchListings, fetchListing } from '../../actions/listing_actions';
import ListingPage from './listing_index';

const mapStateToProps = state => ({
  listings: Object.keys(state.entities.listings).map(id => state.entities.listings[id])
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingPage);
