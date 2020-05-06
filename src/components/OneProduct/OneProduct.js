import React, { Component } from "react";

import { Link } from "react-router-dom";
import PRODUCT_SERVICE from "../services/ProductService";
import axios from "axios";
import ShoppingBag from "../ShoppingBag/ShoppingBag";


class OneProduct extends Component {
  state = {
    currentProduct: "",
    orderItem: "",
    isInShopBag: "",
    quantity: "",
    total: "",
    user: "",
    shoppingBag: [],
    value: ""
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
      quantity: productDetail.count,
      total: productDetail.total,
      user: currentUser,
    });
  }

  // handle each option in product description

  handleItem = (e) => {
    e.preventDefault()
    const { value, name } = e.target;
    console.log('THIS IS VALUE', value)
    console.log('THIS IS NAME', name)
    this.setState((prevState) => ({
      ...prevState,
      orderItem: {
        ...prevState.orderItem,
        [name]: value,
      },
    }));
  };

  handleItemInBag = (e) => {
    const { name, value } = e.target;
    const { user, orderItem, shoppingBag } = this.state;
    const currentState = user;
    orderItem.inShopBag = true;
    orderItem.quantity = 1;
    currentState.userShoppingCart.items.push(orderItem);
    shoppingBag.push(orderItem)
    currentState[name] = value;
    this.setState((state) => ({
      shoppingBag: [...shoppingBag],
      user: currentState,
      isInShopBag: !state.isInShopBag,
    }));
    console.log("USER USER USER", this.state.user);
  };

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("HELLO");
    const { orderItem, user } = this.state
    
    const item = { orderItem }
    
    axios
    .post('http://localhost:3001/api/shopping-bag', item, {withCredentials: true})
    .then((res) => { console.log('New order created', res)
    this.setState(prevState => ({
      ...prevState,
      currentUser: user,
      orderItem : {...orderItem}
    }));
    this.props.history.push('/');
  })
    .catch(err => {console.log(err)})
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

    const { isInShopBag, user, orderItem } = this.state;
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
                <button
                className="btn-item btn btn-sm btn-dark btn-block text-uppercase"
                  disabled={isInShopBag ? true : false}
                  onClick={this.handleItemInBag}
                >
                  {isInShopBag ? <h6 disabled>In Bag</h6> : <h6>Add to bag</h6>}
                </button>
                

                <Link as="input" type="button"
                to={{
                  pathname: `/shopping-bag/${user._id}`,
                  state: {
                    orderItem: orderItem,
                    currentUser: user
                  },
                }}>
                <button className="btn-item btn btn-sm btn-dark btn-block text-uppercase" type="submit">
                  Go to Shopping Bag
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
