import { connect } from 'react-redux';
import { fetchListing, createBooking } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';
import ListingShow from './listing_show';

const mapStateToProps = (state, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId);
  const listing = state.entities.listings[listingId];
  const user = state.session.currentUser;
  return {
    listingId,
    listing,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  createBooking: booking => dispatch(createBooking(booking)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
