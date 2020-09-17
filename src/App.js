import React from 'react';
// import logo from './logo.svg';
// import logo from './Vue.js_Logo_2.svg';
import './App.css';

class NewButton extends React.Component {
  // constructor() {
  //   super()
  //   this.clickHandler = this.clickHandler.bind(this)
  // }
  clickHandler = (event) => {console.log(this.props.motorGlider, event.target)}
  render() {
    return (
      <>
        <button onClick={this.clickHandler}>Click</button>
        <p>{this.props.motorGlider}</p>
      </>
    )
  }
}

function ListItem({item, index}) {
  return <li key={index}>{item}</li>
}

function App() {
  const listOfStuff = [1,2,3,4,5];
  const listItem = (item, index) => <li key={index}>{item}</li>
  return (
    <div className="App">
      <ul>
        {
          listOfStuff.map((item, index) => {
            // return <li key={index}>{item}</li>
            // return listItem(item, index)
            return <ListItem item={item} index={index} />
          })
        }
      </ul>
      <NewButton motorGlider="Motor Glider" />
      <h2>Hello Chelsea</h2>
    </div>
  );
}

export default App;
