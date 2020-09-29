import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    dish: 'class component not set',
    ingredients: ['still not set']
  }
  componentDidMount(){
     axios.get('http://localhost:8080/famousdish')
      .then(response => this.setState({dish: response.data}))
      axios.get('http://localhost:8080/ingredients')
      .then(response => this.setState({ingredients: response.data}))
  }
  // const [dish, setDish] = useState('not set');
  // const [ingredients, setIngredients] = useState(['not set either']);
  // useEffect(() => {
  //   axios.get('http://localhost:8080/famousdish')
  //     .then(response => setDish(response.data))
  //     axios.get('http://localhost:8080/ingredients')
  //     .then(response => setIngredients(response.data))
  // })
  render(){
    return (
      <div className="App">
        <p>The Fav Dish is: {this.state.dish}</p>
        <p>The Ingredients List is: {this.state.ingredients.map(item => <span>{item},</span>)}</p>
      </div>
    );
  }
  
}

export default App;
