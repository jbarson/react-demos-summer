
import React from 'react'
import {Link} from 'react-router-dom'

function UserProfile({users, match}) {
  const user = users.find(individual => individual.id === Number(match.params.idNum))
  console.log(match)
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <h3>ID: {user.id}</h3>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default UserProfile
