import React, { Component } from 'react';
import ProductList from '../components/ProductsList/ProductsList';
import Search from '../components/Search/Search'
import axios from 'axios';

export default class Products extends Component {
    state = {
        postProducts : null,
        search: []
    }

    componentDidMount () {
      this.getProducts();
    };
  
    getProducts = () => {
      axios
        .get('http://localhost:3001/products')
        .then((productsFromAPI) => {
          this.setState({
            postProducts: productsFromAPI.data,
            search: productsFromAPI.data
          });
          // console.log('Product.js LINE 26. Getting all my products ', this.state.postProducts)
            // console.log('Product.js LINE 27. Getting my state search products ', this.state.search)
        })
        .catch((err) => console.log({ err }));
      };

      handleSearchItems = (e) =>{
        const { value }= e.target
        const { postProducts } = this.state
        
        const searchItems = postProducts.filter(item => {
                return item.name.toUpperCase().includes(value.toUpperCase())
          // for (let ea in item) {
          //   if (item[ea] === value) {
          //     return item[ea].toLowerCase().includes(value.toLowerCase())
          //   }
          // }
        })
        this.setState({
          search: searchItems,
          postProducts: postProducts
        })
      }    

      render () {    
        const {search} = this.state           
        return (
            <div>
              <Search handleSearch={this.handleSearchItems} />
            <div className="box">
              {search.map((eachProduct, index) => <ProductList key={index} {...eachProduct}/>)} 
            </div>
            </div>
        )
    }
}
