import React from 'react';
import Clock from './components/Clock'
import './App.css';

class App extends React.Component {
  state = {
    toggleClock: true
  }
  toggleTheClock = () => {
    this.setState(oldState =>({
      toggleClock: !oldState.toggleClock 
    }))
  }
  render(){
    const hasClock = this.state.toggleClock ? <Clock /> : <h2>No Clock</h2>
    return (
      <div className="App">
        {hasClock}
        <button onClick={this.toggleTheClock}>Toggle the Clock!</button>
        <p>{this.state.toggleClock.toString()}</p>
      </div>
      
    );
  }
  
}

export default App;
