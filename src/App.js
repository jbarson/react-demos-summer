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

class NewComponent extends React.Component {
  // constructor(props){
  //   super(props)
  //     this.state ={
  //       message: "this is a message in the state"
  //     }
  //   }
    state = {
      message: "this is a message in the state",
      messageToggle: 'old',
      anotherMessage: "This is another Message!",
      displayColor: "Red",
    }
    handler = () => {
      // console.log('this is in the parent');
      let newMessage ="I have changed the message.";
      let oldMessage = "this is a message in the state";
      if(this.state.messageToggle === "new") {
        this.setState({ message: oldMessage, messageToggle: 'old' });
      }else{
        this.setState({ message: newMessage, messageToggle: 'new' });
      }
    }
    render() {
      return (
        <>
          <p>{this.state.message}</p>
          <button onClick={this.handler}>Parent Button</button>
          <NewButton clickHandler={this.handler} />
          <p>{this.state.anotherMessage}</p>
          <ChildrenAreFun childMessage={this.state.message}/>
          <h3>{this.state.displayColor}</h3>
        </>
      )
    }
}

const NewButton = ({clickHandler}) => {
  // const anotherHandler = () => console.log('in the child!')
  return (
    <>
      <button onClick={clickHandler}>click me in the child!</button>
      {/* <button onClick={anotherHandler}>click me in the child too!</button> */}
    </>
  )
}

const ChildrenAreFun = ({childMessage}) => {
  return (
  <h2>{childMessage}</h2>
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
      {/* <Header></Header>
      <Name firstName={educator.firstName} lastName={educator.lastName}/>
      <Name firstName={anotherName.firstName} lastName={anotherName.lastName}/> */}
      <NewComponent />
      {/* <Teachers teachers={teachers}/> */}
    </div>
  );
}

export default App;
