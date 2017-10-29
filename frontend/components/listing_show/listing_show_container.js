import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { createBooking } from '../../actions/booking_actions'
import ListingShow from './listing_show';

const mapStateToProps = (state, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId);
  const listing = state.entities.listings[listingId];
  if (state.session.currentUser) {
    const currentUserId = state.session.currentUser.id;
    return {
      listingId,
      listing,
      currentUserId
    };
  } else {
    return {
      listingId,
      listing
    };
  }
};

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
