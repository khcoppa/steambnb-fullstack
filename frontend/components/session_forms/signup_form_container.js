import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  }
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
