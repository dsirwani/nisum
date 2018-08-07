
import React, { Component } from 'react';
import Product from '../Product/Product';
import './ProductsList.css';

class ProductList extends Component {

  render() {
    const productList = this.props.products;
    const products = productList.map( product => (
      <Product key = {product.id} { ...product } />
    ));
    return (
        <div id="product-container" className = "product-container" >
            { products }
        </div>
    );
  }
}

export default ProductList;
