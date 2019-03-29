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
      this.setState({
        products: res.data
      })
    }).catch(error => console.log(error))
  }
  
  createProduct = (product) => {
    axios.post('/api/products', product).then(res => {
        this.setState({
            products: res.data
        })
    })
}

  deleteProduct = (id) => {
    axios.delete(`api/products/:${id}`).then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="flex-dash-form">
        <Dashboard deleteProduct={this.deleteProduct} products={this.state.products} />
        <Form createProduct={this.createProduct}/>
        </div>
      </div>
    );
  }
}

export default App;
