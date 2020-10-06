import React, { Component } from 'react'
import storageManager from '../helpers/storageApi';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class LoginPage extends Component {
  state = {
    email: storageManager.getEmailFromStore() || '',
    password: '',
    passwordError: false,
    userError: false,
    isLoggedIn: !!storageManager.getLoginToken()
  }

  constructor() {
    super();
    this.emailRef = React.createRef();
  }

  login = event => {
    event.preventDefault();
    // store email in cache
    storageManager.setEmailInStore(this.state.email);

    // attempt logging in if email and no password error exist...
    if (this.state.email && !this.state.passwordError) {
      axios.post('http://localhost:8080/login', {
        username: this.state.email,
        password: this.state.password
      }).then(res => {
        if (res.data.success) {
          // set the JWT locally
          storageManager.setLoginToken(res.data.token);
          // change state to redirect
          this.setState({
            isLoggedIn: true
          });
        }
      }).catch(err => {
        this.setUserError(true);
      });
    } else {
      this.setUserError(true);
    }
  }

  setUserError = (toggle) => {
    this.setState({
      userError: toggle
    });
  }

  updateInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
      userError: false
    });
  }

  clearEmail = () => {
    storageManager.setEmailInStore();
    this.emailRef.current.value = '';
    this.setState({
      email: '',
      password: ''
    });
  }

  redirectToSignup = () => {
    // use the history router prop, to navigate to the signup page
    if (this.props.history) {
      this.props.history.push('/signup');
    }
  }

  render() {
    // whenever the component re-renders check if loggedIn, if so redirect instead
    if (this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <main className="bstn-min-h-screen bstn-bg-indigo-800 bstn-text-white bstn-flex bstn-items-center">
          <section className="bstn-container bstn-mx-auto bstn-my-0 bstn-p-12 md:bstn-w-6/12">
            <form className="bstn-flex bstn-flex-col" name="loginForm" onSubmit={this.login}>
              <h1 className="bstn-type-header-2 bstn-mb-12">Totally Secure Vault&trade;</h1>
              <label className="bstn-type-header-4 bstn-mb-4">
                Email
              </label>
              <input
                ref={this.emailRef}
                name="email"
                type="email"
                className="bstn-input-text bstn-mb-8"
                value={this.state.email}
                onChange={this.updateInput}
              />
              <label className="bstn-type-header-4 bstn-mb-4">
                Password
              </label>
              <input 
                name="password"
                type="password"
                className="bstn-input-text bstn-mb-2"
                value={this.state.password}
                onChange={this.updateInput}  
              />
              <button className="bstn-button bstn-button--primary bstn-mb-2">Login</button>
              <button type="button" className="bstn-button bstn-button--secondary bstn-mb-2" onClick={this.redirectToSignup}>Sign up</button>
              { storageManager.getEmailFromStore() ? <button
                type="button"
                className="bstn-button bstn-button--danger bstn-mb-2"
                onClick={this.clearEmail}>
                Clear email
              </button> : null }
              <span className="bstn-type-body bstn-text-red-400 bstn-font-bold bstn-mb-8">{this.state.userError ? 'Your email or password is incorrect.' : ''}</span>
            </form>
          </section>
        </main>
      </>
    )
  }
}
