
import React, { Component } from 'react';
import * as apiCalls from './services/api';
import ProductList from './components/ProductList/ProductsList';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
        products:[],
        totalProducts: 0
    }
  }

  componentDidMount(){
    this.loadProducts();
  }

  async loadProducts(){
    let response = await apiCalls.getProducts();
    let productsList = 'groups' in response ? response.groups : "";
    if(Array.isArray(productsList)){
      this.setState({ products: productsList});
    }
   
  }

  render() {
    return (
      <div className="App">
        <h2>Products...</h2>
        <ProductList products = { this.state.products }/>
      </div>
    );
  }
}

export default App;
