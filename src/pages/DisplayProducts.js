import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search/Search";
import Button from "react-bootstrap/Button";


class ProductList extends React.Component {
  state = {
    item: {
      name: "",
      cost: 0,
      designer: false,
      material: "",
      image: "",
      updated: false
    },
    search: ""
  };

  handleSearch = e => {
    const { allProducts } = this.state;
    const { value } = e.target; //we want to "see" what are searching on our input search / the imput is my value
//  console.log('DisplayProducts.js LINE 21 ========================', this.state.allProducts)
    const listSearchItems = allProducts.filter(eachProduct => {
      return eachProduct.material.toLowerCase().includes(value.toLowerCase())
      // console.log('DisplayProducts.js LINE35 +++++++++++++++++', eachItem.name)
      })
      this.setState({
        allProducts: listSearchItems
    })  
  console.log(listSearchItems)
  };

 
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  viewProducts = () => {
    return this.state.allProducts?.length > 0 ? (
      this.state.allProducts.map((product, index) => {
        return (
          // item
          <div className="cardview">
            <div key={index} className="content">
              <Link to={{ pathname: "details", state: { data: product } }}>
                <img src={product.image} alt={product.name} />
                <p >Product: {product.name}</p>
                <p >cost: ${product.cost}</p>
              </Link>
              <div>
                  <i className="far fa-heart heart-click"></i>
              </div>                                                                    
            </div>
          </div>
        );
      })
    ) : (
      <h2>No Products to Display</h2>
    );
  };

  getProductList = () => {
    if (this.state.allProducts !== this.props.allProducts) {
      this.setState({
        allProducts: this.props.allProducts,
      });
    }
  };

  render() {
    return (
      // container className="cardview"
      <div className="box-products">
        <Search handleSearch={this.handleSearch} />
        {this.getProductList()}
        {this.state.allProducts && this.viewProducts()}
        {/* {(<div>{this.state.allProducts}</div> && <div className="cardview">{this.viewProducts()}</div>)} */}
      </div>
    );
  }
}

export default ProductList;
