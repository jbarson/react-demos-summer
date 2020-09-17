import React from 'react';
import './App.css';
import AddTodo from './AddTodo'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 9,
        content: "finish this lab",
        done: false
      },
      {
        id: 10,
        content: "finish the next lab",
        done: false
      },
      {
        id: 11,
        content: "send Chelsea your paypal info",
        done: false
      }
    ]
  }
  addTodo = (newTodo) => {
    console.log(newTodo)
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <ul>
          {
            
            this.state.todos.map((todo) => {
            return <li key={todo.id}>{todo.content}</li>
             })
          }
        </ul>
      </div>
    );
  }
}

export default App;
