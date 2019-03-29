import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {

    render() {
        let { products } = this.props
        let map = products.map((item, i) => {
            return (
                <Product
                key={i} 
                item={item} 
                products={products}
                deleteProduct={this.props.deleteProduct}/>
            )
        })
        return (
            <div>
                {map}
            </div>
        )
    }
}

export default Dashboard