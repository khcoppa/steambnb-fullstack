import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import Homepage from './homepage';

const mapStateToProps = state => {
  return {
    user: state.session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
