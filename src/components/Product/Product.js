import React, { Component } from 'react'

class Product extends Component {


    handleDeleteClick = () => {
        let { id } = this.props.products
        this.props.deleteProduct(id)
    }
    
    render() {
        console.log(this.props.products)
        return (
            <div className="product-container">
                <img className="border-img" src={this.props.item.img} width="300" height="200" />
                <div className="name-price-flex">
                    <div className="product-name">{this.props.item.name}</div>
                    <div className="product-price">${this.props.item.price}</div>
                    <button onClick={this.handleDeleteClick} className="delete-button">Delete</button>
                </div>
            </div>
        )
    }
}

export default Product