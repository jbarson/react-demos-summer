import React from 'react'
import PropTypes from 'prop-types'

function Greeting({greeting, name}) {
  return (
    <div>
      <h1>{greeting} {name}</h1>
    </div>
  )
}

Greeting.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string.isRequired
}
Greeting.defaultProps = {
  greeting: 'Bonjour'
}

export default Greeting
