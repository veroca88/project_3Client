import React, { Component } from "react";
import axios from "axios";

class OneProduct extends Component {
  state = {
    product: undefined,
    id: this.props.match.params.productId,
    orderItem: [],
    // id: this.props.location.state.data._id
  };

  componentDidMount() {
    this.getOneProduct();
  }

  getOneProduct = () => {
    // console.log("Get product ONneProduct.js LINE15 ..........", {
    //   id: this.props.match.params,
    // });
    // const id = this.props.match.params.productId
    axios
      .get(`http://localhost:3001/products/${this.state.id}`)
      .then((productDetails) => {
        this.setState({
          product: productDetails.data,
          orderItem: productDetails.data,
        });
        // console.log("LINE33 This is our oneProduct data", this.state.product);
        // console.log("LINE34 This is our order...........", this.state.orderItem);
        // console.log('Product.js LINE 26. Getting all my products ', this.state.postProducts)
        // console.log('Product.js LINE 27. Getting my state search products ', this.state.search)
      })
      .catch((err) => console.log({ err }));
  };

// DONT DELETE IT COULD HELP WITH THE SIZE SELECTED

  // handleClearArray = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     orderItem: { size: [], color: [] },
  //   }));
  //   console.log("ClearArray", this.state.orderItem);
  // };

  handleSizeItem = (e) => {
    const { value } = e.target;
    const { product, orderItem } = this.state;
    console.log("LINE44 This is our order BEFORE...........", orderItem.size);
    const name = e.target.name;
    const sizeSelected = product.size[value - 1];
    console.log("SIZE", sizeSelected);
    // return sizeSelected
    this.setState((prevState) => ({
      ...prevState,
      orderItem: {
        size: [sizeSelected],
      },
    }));
    console.log("LINE54 This is our order AFTER...........", orderItem);
  };

  handleColorItem = (e) => {
    const { value } = e.target;
    const { product } = this.state;
    const colorSelected = product.color[value - 1];
    console.log("COLOR", colorSelected);
    // return
  };

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.orderItem.value);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name);

    this.setState({
      [name]: value,
    });
  }

  render() {
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    const { product } = this.state;

    return (
      <section>
        {product ? (
          //onSubmit={this.handleSubmit}
          <form className="container">
            <div className="card">
              <div className="row ">
                <div className="col-md-8">
                  <img src={product.image} className="w-100" />
                </div>
                <div className="col-md-4 info-box">
                  <h4 className="card-title">{product.name}</h4>
                  <hr />
                  <p className="card-text">
                    Price: <strong className="cost-box">${product.cost}</strong>
                  </p>
                  <p className="card-text">
                    Material :
                    <strong className="material-box">{product.material}</strong>
                  </p>
                  <div className="size-box">
                    <select
                      // value={this.state.orderItem.size}
                      onChange={this.handleSizeItem}
                    >
                      <option value="0">Select size</option>
                      {product.size.map((eachSize, index) => {
                        return <option value={index + 1}>{eachSize}</option>;
                      })}
                    </select>
                  </div>

                  <div className="size-box">
                    <select                  
                      onChange={this.handleColorItem}
                      value={this.state.color}
                    >
                      <option value="0">Select color</option>
                      {product.color.map((eachColor, index) => {
                        return <option value={index + 1}>{eachColor}</option>;
                      })}
                    </select>
                  </div>

                  <button className="add-item btn btn-lg btn-dark btn-block text-uppercase">
                    Add to Shopping Bag
                  </button>
                  <div>
                    <i className="far fa-heart heart-click-item"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <h1>Loading... </h1>
        )}
      </section>
    );
  }
}

export default OneProduct;
