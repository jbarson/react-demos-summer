import React from 'react'

export default function TaskList({taskList}) {
  return (
    <ul>
      {taskList.map(task => {
        return <li key={task.id}>{task.goal}</li>
      })}
    </ul>
  )
}
