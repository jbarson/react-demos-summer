import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <p>Page Not Found</p>
      <p><Link to="/">Home page</Link></p>
    </div>
  )
}

export default NotFound
