import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import NavbarHome from './navbar_home';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarHome);
