import React from 'react'

export default function AddTodo({addTodo}) {
  const clickHandler = function(event){
    event.preventDefault();
    console.log(event.target.newItem.value);
    console.log(typeof addTodo)
    addTodo({
      id: Date.now(),
      content: event.target.newItem.value,
      done: false
    })
    document.querySelector('form').reset();
  }
  return (
    <div>
      <form name="AddTodo" onSubmit={clickHandler}>
        <input type="text" name="newItem" />
        <button>Click me</button>
      </form>
    </div>
  )
}
