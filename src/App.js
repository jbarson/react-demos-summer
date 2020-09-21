import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './components/Home'
import AboutPage from './components/About'
import EventPage from './components/Event';
import NotFound from './components/NotFound';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component= {AboutPage} />
            <Route path="/event" component={EventPage} />
            <Redirect from="/round-table-2020" to="/event" />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
