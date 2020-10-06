import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/signup" component={SignupPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
  );
}

export default App;
