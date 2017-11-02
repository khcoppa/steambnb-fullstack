import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import { withRouter } from 'react-router-dom';

import SignupFormContainer from '../session_forms/signup_form_container';
import LoginFormContainer from '../session_forms/login_form_container';

import NavbarHomeContainer from './navbar_home_container';

class NavbarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location_search: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter('location', this.state.location_search);
    this.setState({['location_search']: ''});
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="navbar-search">
          <div className="right-search">
            <div className="logo-search">
              <Link to={'/'}><i id="logo" className="icon fa fa-tint"></i></Link>
            </div>

            <div className='search-bar'>
              <div className='search-icon'>
                <i className="fa fa-search"></i>
              </div>
              <div className='search-input'>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    value={this.state.location_search}
                    onChange={this.update('location_search')}
                    placeholder="Anywhere"
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="user-logout">
            <ul>
              <li>
                <h4>{this.props.currentUser.username}</h4>
              </li>

              <li>
                <button className="astext" onClick={this.handleLogout}>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <NavbarHomeContainer />
      );
    }

  }
}
export default withRouter(NavbarSearch);
