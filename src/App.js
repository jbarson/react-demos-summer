import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './components/Home'
import AboutPage from './components/About'
import EventPage from './components/Event';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import './App.css';
import UsersList from './components/UsersList';


class App extends React.Component {
  state = {
    users: [
      {
        id: 0,
        name: 'Abdul'
      },
      {
        id: 1,
        name: 'Dave'
      },
      {
        id: 2,
        name: 'Hector'
      }
    ]
  }
  render(){
    const { users } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" component= {AboutPage} />
              <Route path="/event" component={EventPage} />
              <Redirect from="/round-table-2020" to="/event" />
              <Route path="/users/:idNum" render={(routerProps) => <UserProfile users={users} {...routerProps} /> } ></Route>
              <Route path="/usersList" render={(routerProps) => <UsersList users={users} {...routerProps} />}/>
              <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
