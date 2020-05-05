import React from "react";

import { Link } from "react-router-dom";

import axios from "axios";
import Search from "../Search/Search";
import { AuthContext } from "../context/Authentication";

class ProductList extends React.Component {
  state = {
    postProducts: null,
    search: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((productsFromAPI) => {
        this.setState({
          postProducts: productsFromAPI.data,
          search: productsFromAPI.data,
        });
        console.log("PRODUCTSLIST.JS products", this.state.postProducts);
      })
      .catch((err) => console.log({ err }));
  };

  // handle search by description of product (is checked it is ok!!)

  handleSearchItems = (e) => {
    const { value } = e.target;
    const { postProducts } = this.state;

    const searchItems = postProducts.filter((item) => {
      console.log("Here is the iteeeeeeeeeeeeeem", item);
      return item.description.toUpperCase().includes(value.toUpperCase());
      // for (let ea in item) {
      //   if (item[ea] === value) {
      //     return item[ea].toLowerCase().includes(value.toLowerCase())
      //   }
      // }
    });
    this.setState({
      search: searchItems,
      postProducts: postProducts,
    });
  };

  // // handle each option in product description

  // handleItem = (e) => {
  //   // e.preventDefault()
  //   const { value, name } = e.target;
  //   console.log("this is value", value);
  //   console.log("this is name", name);
  //   // const { product } = this.state;
  //   // console.log("COLOR", value);
  //   this.setState((prevState) => ({
  //     // ...prevState,
  //     orderItem: {
  //       ...prevState.orderItem,
  //       [name]: value,
  //       inShopBag: true,
  //     },
  //   }));
  //   console.log("this is our order", this.state.orderItem);
  // };

  // addToCart = () => {};

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { currentUser } = context.state;

          const { search, postProducts, orderItem } = this.state;

          return (
            <>
              <div>
                <Search handleSearchItems={this.handleSearchItems} />
                <div className="box">
                  {search ? (
                    search.map((eachProduct, index) => (
                      <div key={index} className="cardview">
                        <div className="content">
                          <Link
                            to={{
                              pathname: `/products/${eachProduct._id}`,
                              state: {
                                productDetail: eachProduct,
                                currentUser: currentUser
                              },
                            }}
                          >
                            <img
                              className="card-img"
                              src={eachProduct.image}
                              alt={eachProduct.name}
                            />
                          </Link>
                          <p>{eachProduct.name}</p>
                          <p>${eachProduct.cost}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h1> L O A D I N G . . . </h1>
                  )}
                </div>
              </div>
            </>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default ProductList;
