import React from 'react'

export default class TodoForm extends React.Component {
  state = {
    taskGoal: ''
  }

  handleFormInput = event => {
    this.setState({taskGoal: event.target.value})
  }
  handleFormSubmit = event => {
    const {handleTaskAdd} = this.props;
    event.preventDefault();
    if (this.state.taskGoal === '') {
      alert('Enter a goal please')
      return;
    }
    handleTaskAdd(this.state)
    this.setState({taskGoal: ''})
  }
  render() {
    return (
      <form className="task-form" onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="taskGoal"
          placeholder="Add a new task"
          className="task-form__input"
          onChange={this.handleFormInput}
          value={this.state.taskGoal} 
          />
        <button type="submit" className="task-form__submit">Add Task</button>
      </form>
    )
  }
  
}
