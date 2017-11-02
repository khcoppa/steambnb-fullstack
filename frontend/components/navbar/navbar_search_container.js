import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { login, signup, logout } from '../../actions/session_actions';
import NavbarSearch from './navbar_search';

const mapStateToProps = ({ session, entities, ui }) => {
  return {
    currentUser: session.currentUser,
    listings: entities.listings,
    location_coords: ui.filters.location
  };
};

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarSearch);
