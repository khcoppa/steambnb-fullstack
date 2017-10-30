import { connect } from 'react-redux';

import { login, signup, logout } from '../../actions/session_actions';
import NavbarSearch from './navbar_search';

const mapStateToProps = ({ session, entities }) => {
  return {
    currentUser: session.currentUser,
    listings: entities.listings
  };
};

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarSearch);
