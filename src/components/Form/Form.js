import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    handleCreateProduct = () => {
        let { name, price, img} = this.state
        this.props.createProduct({
            name,
            price,
            img
        })
    }

    handleChangeImg = (value) => {
        this.setState({
            img: value
        })
    }

    handleChangeProduct = (value) => {
        this.setState({
            name: value
        })
    }

    handleChangePrice = (value) => {
        this.setState({
            price: value
        })
    }

    cancelInputs = () => {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    
    
    render() {
        return (
            <div className="form-container">
                    <div className="form-img">
                        
                    </div>
                    <div className="img-input">
                        Image URL: <br></br> 
                        <input 
                        value={this.state.img} 
                        onChange={(e) => this.handleChangeImg(e.target.value)} 
                        className="input-width">
                        </input>
                    </div>
                    <div className="product-input">
                        Product Name: <br></br> 
                        <input
                        value={this.state.name}
                        onChange={(e) => this.handleChangeProduct(e.target.value)} 
                        className="input-width">
                        </input>
                    </div>
                    <div className="price-input">
                        Price: <br></br> 
                        <input
                        value={this.state.price} 
                        onChange={(e) => this.handleChangePrice(e.target.value)} 
                        className="input-width"
                        type="number">
                        </input>
                    </div>
                    <div className="flex-buttons">
                        <button onClick={this.cancelInputs}>Cancel</button>
                        <button onClick={this.handleCreateProduct}>Add to Inventory</button>
                    </div>
            </div>
        )
    }
}

export default Form