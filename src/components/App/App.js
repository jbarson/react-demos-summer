import React from 'react';
import * as uid from 'uniqid';
import './App.scss';
import TodoForm from '../TodoForm/';
import TaskList from '../TaskList/';

class App extends React.Component {
  state = {
    taskList: [
      { id: uid(), goal: 'Learn CSS Grid', isCompleted: false },
      { id: uid(), goal: 'Finish React Hook walk-through', isCompleted: true },
      { id: uid(), goal: 'Build Svelte TODO List app', isCompleted: false }
    ]
  }
  handleTaskAdd = taskData => {
    this.setState({taskList: [...this.state.taskList, {id: uid(), goal: taskData.taskGoal, isCompleted: false}]})
  }
  render(){
    return (
      <div className="App">
       <h1>Task Application</h1>
       <TodoForm 
        handleTaskAdd={this.handleTaskAdd}/>
       <TaskList 
        taskList={this.state.taskList}/>
      </div>
    );
  }
  
}

export default App;
