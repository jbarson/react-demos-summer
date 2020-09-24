import React from 'react';
import './App.css';

function FormOnSubmit() {
  const signUp = (event) => {
    event.preventDefault()
    console.log(event)
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value

    if (!password){
      alert('no password')
      return
    }

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    //=== submit form to Backend ===
  }
  return (
    <form onSubmit={signUp}>
      <h2>Form with onSubmit</h2>
      <div>
        Email: <input type="text" name="email" />
      </div>
      <div>
        Password: <input type="password" name="password" />
      </div>
      <div>
        Confirm Password: <input type="password" name="confirmPassword" />
      </div>
      <button>Sign Up</button>
    </form>
  )
}

class FormWithState extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  updateEmail = event => {
    this.setState({email: event.target.value})
  }

  handleSubmit = event => {
    //error handling
    //submit to back end
  }

  render(){
    return (
    <form>
      <h2>Form with State</h2>
      <div>
        Email: 
        <input 
          type="text" 
          name="email" 
          onChange={this.updateEmail}
          value={this.state.email}
        />
      </div>
      <div>
        Password: <input type="password" name="password" />
      </div>
      <div>
        Confirm Password: <input type="password" name="confirmPassword" />
      </div>
      <button onClick={this.handleSubmit}>Sign Up</button>
    </form>)
  }
}

function FormWithRefs({populateState}) {
  const formRef = React.createRef()
  const signUp = () => {
    const form = formRef.current
    const email = form.email.value
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value
    if (!password){
      alert('no password')
      return
    }

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    //=== submit form to Backend ===
    axios.post('someUrl', {email: email, password: password})
     .then(res => populateState(res))
  }
  return (
    <form ref={formRef}>
      <h2>Form with Refs</h2>
      <div>
        Email: <input type="text" name="email" />
      </div>
      <div>
        Password: <input type="password" name="password" />
      </div>
      <div>
        Confirm Password: <input type="password" name="confirmPassword" />
      </div>
      <button onClick={signUp}>Sign Up</button>
    </form>
  )
}



class App extends React.Component {
  state = {}

  populateState = (formSubmission) => {
    this.setState(formSubmission)
  }
  render(){
    return (
      <div className="App">
        <FormOnSubmit />
        <FormWithState />
        <FormWithRefs populateState={populateState}/>
      </div>
    );
  }
}

export default App;
