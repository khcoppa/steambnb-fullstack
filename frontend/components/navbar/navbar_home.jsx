import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import { withRouter } from 'react-router-dom';

import SignupFormContainer from '../session_forms/signup_form_container';
import LoginFormContainer from '../session_forms/login_form_container';

class NavbarHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      login: false
    }
    this.onModalClose = this.onModalClose.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser && !this.props.currentUser) {
      this.setState({modalOpen: false});
      this.props.history.push('/loggedIn');
    }
  }

  handleClick(bool) {
    this.setState({modalOpen: true, login: bool});
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  render() {
    const component = (this.state.login) ? <SignupFormContainer /> : <LoginFormContainer />;
    return (
      <div className="navbar-home">
        <div className="logo-div">
          <i id="logo" className="icon fa fa-tint"></i>
        </div>
        <div className="right-nav">
          <ul>
            <li>
              <button className="astext" onClick={this.handleClick.bind(this, true)}>
                Sign Up
              </button>
            </li>

            <li>
              <button className="astext" onClick={this.handleClick.bind(this, false)}>
                Log In
              </button>
            </li>
          </ul>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          >
          <button id="modal-close" onClick={this.onModalClose}>X</button>
          {component}
        </Modal>
      </div>
    );
  }
}
export default withRouter(NavbarHome);
