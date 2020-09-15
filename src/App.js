import React from 'react';
import {v1 as uuidv1} from 'uuid';
import Header from './components/Header/Header.jsx';
import './App.css';



const Teachers = ({teachers}) => {
  return (
    <ul>
      {teachers.map(individual => {
        return (<li key={individual.id}>{individual.name}, {individual.level}, {individual.id}</li>)
      })}
    </ul>
  )
}

const NewComponent = () => {
  const handler = () => console.log('this is in the parent')
  return (<NewButton clickHandler={handler}/>)
}

const NewButton = ({clickHandler}) => {
  const anotherHandler = () => console.log('in the child!')
  return (
    <>
      <button onClick={clickHandler}>click me in the child!</button>
      <button onClick={anotherHandler}>click me in the child too!</button>
    </>
  )
}

// function Header() {
//   return (
//     <h1>Web Devs of the World Unite!</h1>
//   )
// }

function Name({firstName, lastName}) {
  return (
    <div className="name">
      <span>{firstName}</span>
      <span>{lastName}</span>
    </div>
  )
}


function App() {
  const teachers = [
    {
      name: "Jon",
      level: "educator",
      id: uuidv1()
    },
    {
      name: "Lauren",
      level: "educator",
      id: uuidv1()
    },
    {
      name: "Angus",
      level: "TA",
      id: uuidv1()
    },
    {
      name: "Jessica",
      level: "TA",
      id: uuidv1()
    }
  ]
  const anotherName = {
    firstName: 'Angus',
    lastName: 'Ryer'
  }
  const educator = {
    firstName: "Jon",
    lastName: "Barson"
  }
  return (
    <div className="App">
      <Header></Header>
      <Name firstName={educator.firstName} lastName={educator.lastName}/>
      <Name firstName={anotherName.firstName} lastName={anotherName.lastName}/>
      <NewComponent />
      <Teachers teachers={teachers}/>
    </div>
  );
}

export default App;
