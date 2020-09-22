import React, { Component } from 'react'

class Clock extends Component {
  constructor(){
    super()
    console.log('CLOCK CONSTRUCTOR RAN')
  }

  clockInterval;

  state = {
    time: new Date().toLocaleTimeString()
  }

  componentDidMount() {
    console.log('Clock mounted')
    this.clockInterval = setInterval(this.updateTime, 1000)
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log('Should Clock Update')
    return nextState
  }

  componentDidUpdate(_prevProps, prevState) {
    console.log('Clock updated ', this.state.time, '\n State was previously: ', prevState)
  }

  componentWillUnmount() {
    console.log('Killing the Clock!')
    clearInterval(this.clockInterval)
  }

  updateTime = () => {
    this.setState({time: new Date().toLocaleTimeString()})
  }
  render() {
    return (
      <div>
        <h1>This is a clock.</h1>
        <p>{this.state.time}</p>
      </div>
    )
  }
}
export default Clock;