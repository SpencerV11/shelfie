import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    handleChangeImg = (value) => {
        this.setState({
            imgurl: value
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
                        value={this.state.imgurl} 
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
                        <button>Add to Inventory</button>
                    </div>
            </div>
        )
    }
}

export default Form