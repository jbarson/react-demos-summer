import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p><Link to="/about" className="link">About page</Link></p>
      <p><Link to="/event">Event page</Link></p>
    </div>
  )
}

export default HomePage
