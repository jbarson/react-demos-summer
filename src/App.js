import React from 'react';
import './App.css';

function App() {
  const setStorage = () => {
    const valToSave = document.getElementById('input').value
    const jonsObject = {
      name: 'Jon',
      value: valToSave
    }
    localStorage.setItem('jonsObjectKey', JSON.stringify(jonsObject))
  }
  const getStorage = () => {
    const value = JSON.parse(localStorage.getItem('jonsObjectKey')) 
    console.log(value)
  }
  return (
    <div className="App">
      <h1>Storage Wars!</h1>
      <input type="text" id="input" placeholder="data"/>
      <button onClick={setStorage}>Set Storage</button>
      <button onClick={getStorage}>Get Storage</button>
    </div>
  );
}

export default App;
