import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';

const mapStateToProps = (state, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId);
  const listing = state.entities.listings[listingId];
  return {
    listingId,
    listing
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
