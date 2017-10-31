import { connect } from 'react-redux';
import { fetchListing, createReview } from '../../actions/listing_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId);
  const listing = state.entities.listings[listingId];
  const user = state.session.currentUser;
  return {
    listingId,
    user,
    listing
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
