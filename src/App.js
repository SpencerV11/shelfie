import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/products').then(res => {
      console.log(res.data)
      this.setState({
        products: res.data
      })
    }).catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="flex-dash-form">
        <Dashboard products={this.state.products} />
        <Form />
        </div>
      </div>
    );
  }
}

export default App;
