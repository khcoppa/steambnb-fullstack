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
      searchVal: ''
    }
    this.selectListing = this.selectListing.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({searchVal: e.currentTarget.value});
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/loggedOut');
  }

  matches() {
    const matches = [];
    this.props.listings.forEach(listing => {
      let title = listing.title;
      let subTitle = title.slice(0, this.state.searchVal.length);
      if (subTitle.toLowerCase() === this.state.searchVal.toLowerCase()) {
        matches.push(title);
      }
    });
    return matches;
  }

  selectListing(e) {
    let title = e.currentTarget.innerText;
    this.setState({ searchVal: title });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="navbar-search">
          <div className="logo-div">
            <Link to={'/'}><i id="logo" className="icon fa fa-tint"></i></Link>
          </div>

          <div className='search-bar'>
            <i className="fa fa-search"></i>
            <input
              onChange={this.handleInput}
              value={this.state.searchVal}
              placeholder='Anywhere'/>
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
