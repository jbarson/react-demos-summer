import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'

class App extends React.Component {
  state = {
    route: "Home"
  };
  changeRoute = (path) => {
    this.setState({route: path})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Simple Router</h1>
          <nav>
            <a href="#" className="App-link" onClick={() => this.changeRoute('Home')}>Home</a>
            <a href="#" className="App-link" onClick={() => this.changeRoute('About')}>About</a>
          </nav>
        </header>
        <main>
          { this.state.route === "Home" ? <Home /> : <About />}
        </main>
      </div>
    );
  }
  
}

export default App;
