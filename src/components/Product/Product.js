import React, { Component } from 'react'

class Product extends Component {
    
    render() {
        console.log(this.props.products)
        return (
            <div className="product-container">
                <img className="border-img" src={this.props.item.img} width="300" height="200" />
                <div className="name-price-flex">
                    <div className="product-name">{this.props.item.name}</div>
                    <div className="product-price">${this.props.item.price}</div>
                </div>
            </div>
        )
    }
}

export default Product