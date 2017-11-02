import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

 renderErrors() {
    if (this.props.errors.responseJSON) {
      return (<p>{this.props.errors.responseJSON}</p>);
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user})
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { username: 'Guest', password: 'password' };
    this.props.login({user});
  }

  render() {
    return(
      <div className="form-container">
        <h2><span>Login</span></h2>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="username-input">
            <input
              type="text"
              placeholder="Email Address"
              value={this.state.username}
              onChange={this.update('username')}/>
            <div>
              <i className="fa fa-envelope-o"></i>
            </div>
          </div><br />
          <div className="password-input">

            <input className="form-input"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              className="password-input"/>
            <div>
              <i className="fa fa-lock"></i>
            </div>
          </div><br />
          <button id="submit-button">Log in</button>
        </form>
        <form className="demo" onSubmit={this.demoLogin}>
          <button id="demo-button">Demo Login</button>
        </form>
      </div>
    );
  }
}

module.exports = LoginForm;
