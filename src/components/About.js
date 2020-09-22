import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Me from './Me';
import MyCat from './MyCat';
import Nav from "./Nav"

export default function AboutPage({match}) {
    console.log(match)
    return (
      <div>
        <h1>About page</h1>
        <Nav />
        <Link to={match.url + '/me'}>Me page</Link>
        <Link to={`${match.url}/mycat`}>My cat page</Link>
        <Switch>
          <Route path={`${match.url}/me`} component={Me} />
          <Route path={`${match.url}/mycat`} component={MyCat} />
        </Switch>
      </div>
    )
  
}