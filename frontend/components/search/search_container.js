import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = state => {
  return {
    listings: Object.keys(state.entities.listings).map(id => state.entities.listings[id]),
    start_date: state.ui.filters.start_date,
    end_date: state.ui.filters.end_date
  }
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
