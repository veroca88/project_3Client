import React, { Component } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

// state = {
//   currentProduct: this.props.location.state.productDetail, // this is our reference
//   orderItem: this.props.location.state.orderItem, // this is going to change
//   isInShopBag: this.props.location.state.productDetail.inShopBag, //true or false
//   user: this.props.location.state.currentUser
// };

class OneProduct extends Component {
  state = {
    currentProduct: "",
    orderItem: "",
    isInShopBag: "",
    user: "",
  };

  componentDidMount() {
    // const { productDetail } =  this.props.location.state
    console.log("ComponentDidMount..", this.props.location);

    const productDetail = this.props.location?.state?.productDetail
      ? this.props.location.state.productDetail
      : this.state.currentProduct;
    const currentUser = this.props.location?.state?.currentUser
      ? this.props.location.state.currentUser
      : this.state.user;

    this.setState({
      currentProduct: productDetail, // this is our reference
      orderItem: productDetail, // this is going to change
      isInShopBag: productDetail.inShopBag, //true or false
      user: currentUser,
    });
  }

  // handle each option in product description

  handleItem = (e) => {
    // e.preventDefault()
    const { value, name } = e.target;
    console.log("this is value", value);
    console.log("this is name", name);
    // const { product } = this.state;
    // console.log("COLOR", value);
    this.setState((prevState) => ({
      // ...prevState,
      orderItem: {
        ...prevState.orderItem,
        [name]: value,
        inShopBag: true,
      },
    }));
    console.log("this is our order", this.state.orderItem);
  };

  handleClick = () => {
    this.setState((state) => ({
      isInShopBag: !state.isInShopBag,
    }));
  };

  addToCart = (order) => {
    const { user } = this.state
    const theShoppingBag = user.userShoppingCart.items;

    theShoppingBag.map((eachItem) =>
      eachItem._id === order._id ? "Item already added!!" : theShoppingBag.push(order)
    );
  };

  render() {
    const {
      name,
      image,
      cost,
      material,
      size,
      color,
      id,
    } = this.state.currentProduct;

    const { user, orderItem } = this.state;
    console.log(this.props.location.state);

    console.log("this is current Product ++++++++", this.state.currentProduct);

    console.log("this is orderItem", this.state.orderItem);

    console.log("this is shopping bag", this.state.shoppingBag);

    console.log("this is user............", this.state.user);
    return (
      <section>
        <form onSubmit={this.handleSubmit} className="container">
          <div className="card">
            <div className="row ">
              <div className="col-md-8">
                <img src={image} className="w-100" />
              </div>
              <div className="col-md-4 info-box">
                <h4 className="card-title">{name}</h4>
                <hr />
                <p className="card-text">
                  Price: <strong className="cost-box">${cost}</strong>
                </p>
                <p className="card-text">
                  Material :<strong className="material-box">{material}</strong>
                </p>
                <div className="size-box">
                  <select name="size" onChange={this.handleItem}>
                    <option>Select size</option>
                    {size &&
                      size.map((eachSize, index) => {
                        return (
                          <option key={index} value={eachSize}>
                            {eachSize}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="size-box">
                  <select name="color" onChange={this.handleItem}>
                    <option>Select color</option>
                    {color &&
                      color.map((eachColor, index) => {
                        return (
                          <option key={index} value={eachColor}>
                            {eachColor}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <Link
                  to={{
                    pathname: `/shopping-bag/${user._id}`,
                    state: {
                      item: orderItem,
                    },
                  }}
                >
                  <button className="add-item btn btn-lg btn-dark btn-block text-uppercase">
                    Add to Shopping Bag
                  </button>
                </Link>

                <div>
                  <i className="far fa-heart heart-click-item"></i>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default OneProduct;
