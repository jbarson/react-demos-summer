import React from 'react'

function UsersList({users}) {
  return (
    <div>
      {users.map( item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default UsersList
