import React, { Component } from "react";

import PRODUCT_SERVICE from "../services/ProductService";

import { Link } from "react-router-dom";

export default class RandomProduct extends Component {
  state = {
    allProducts: "",
    randomProduct: "",
  };
  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    PRODUCT_SERVICE.getProducts()
      .then((productsFromAPI) => {
        this.setState({
          allProducts: productsFromAPI.data,
          randomProduct: productsFromAPI.data,
        });
        console.log(
          "DAILY INSPIRATIONnnnnnnnnnnn.JS products",
          this.state.allProducts
        );
      })
      .catch((err) => console.log({ err }));
  };

  randomCard = (products) => {
    const randomNumber = Math.floor(Math.random() * products.length);
    let dailyProduct = products[randomNumber];
    // return allProducts[randomNumber]
    console.log(".....................", dailyProduct);
    return (
      <section className="container">
        <div className="card">
          <div className="row ">
            <div className="col-md-8">
              <img
                alt={dailyProduct?.name}
                src={dailyProduct?.image}
                className="w-100"
              />
            </div>
            <div className="col-md-4 info-box product-info">
              <div className="product-text">
                <h1>{dailyProduct?.name}</h1>
                <h2>by AWARE</h2>
                <p>
                  Harvest Vases are a reinterpretationof peeled fruits and
                  vegetables as functional objects. The surfaces appear to be
                  sliced and pulled aside, allowing room for growth.{" "}
                </p>
              </div>
              <div className="product-price-btn">
                <Link to="/products">
                  <button type="button">buy now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  render() {
    const { allProducts } = this.state;
    return <>{this.randomCard(allProducts)}</>;
  }
}
