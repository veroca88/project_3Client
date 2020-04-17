import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class ListProducts extends Component {
    state = {
        postProducts : null,
        search: ""
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
                });
                // console.log('getting all my products in listPRODUCTS ', productsFromAPI)
            })
            .catch((err) => console.log({ err }));
        };
        
        onChange = (e) => {
            this.setState({ search : e.target.value})
        }
        
        render() {                
                        
        return (
            <div>
            <input
            onChange={this.onChange}
              id="search"
              name="search"
              placeholder="Search Products"
              style={{ width: "50%" }}
            />
            <div>
            
            </div>
          </div>
        )
    }
}
