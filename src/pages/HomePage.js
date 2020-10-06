import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import storageManager from '../helpers/storageApi';

export default class HomePage extends Component {
  state = {
    isLoggedIn: !!storageManager.getLoginToken(),
    vaultEntries: [],
    vaultLoadError: false
  }

  logout = (otherStateChanges) => {
    storageManager.unsetLoginToken();
    this.setState({
      isLoggedIn: false,
      ...otherStateChanges
    });
  }

  componentDidMount() {
    // if the token is available in session storage...
    if (storageManager.getLoginToken()) {
      // access secure resources and provide the token in the authorization header
      axios.get('http://localhost:8080/vault', {
        headers: {
          Authorization: `Bearer ${storageManager.getLoginToken()}`
        }
      })
      .then(resp => {
        // on success, get the data into the state and remove any errors
        if (resp.data.success) {
          this.setState({
            vaultEntries: resp.data.vaultEntries,
            vaultLoadError: false
          });
        }
      })
      .catch(err => {
        // on failure, show a vault load error
        this.logout({
          vaultLoadError: true
        });
      });
    }
  }

  render() {
    // whenever the app re-renders, check if the state has changed. if true, redirect instead.
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <div className="bstn-min-h-screen bstn-bg-blue-200">
          <header className="bstn-p-8 bstn-flex bstn-flex-col sm:bstn-flex-row bstn-justify-between">
            <h1>Totally Secure Vault&trade;</h1>
            <button className="bstn-button--secondary" onClick={this.logout}>Log out</button>
          </header>
          <main className="bstn-p-8">
            <section className="bstn-container bstn-type-body bstn-text-blue-900">
              {this.state.vaultEntries && this.state.vaultEntries.length ? this.state.vaultEntries.map(ent => <p key={ent.id}>{ent.data}</p>) : this.state.vaultLoadError ? 'Could not load vault data.' : 'Loading...'}
            </section>
          </main>
        </div>
      </>
    )
  }
}
