import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = state => ({
  listings: Object.keys(state.entities.listings).map(id => state.entities.listings[id])
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
