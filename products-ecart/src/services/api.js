//import fetchJsonp from 'fetch-jsonp';
//import axios from 'axios';
import { PRODUCTS } from '../stub/products';
//const FETCH_PRODUCTS_URL = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
//const FETCH_PRODUCTS_URL = 'stub/products.json';

export async function getProducts(){
        return PRODUCTS;
//     axios.get(FETCH_PRODUCTS_URL)
//   .then(function (response) {
//     console.log(response);
//   })
// .catch((err) =>{
//     console.log("oooo"+err);
// });



}