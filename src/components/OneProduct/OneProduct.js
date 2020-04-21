import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import axios from "axios";

class OneProduct extends Component {
  state = {
    product: undefined,
    id: this.props.match.params.productId,
    // id: this.props.location.state.data._id
    iterablePath: "",
  };

  componentDidMount() {
    // console.log('Get product ONneProduct.js LINE15 ..........', {id : this.props.match.params})
    // const id = this.props.match.params.productId
    axios
      .get(`http://localhost:3001/products/${this.state.id}`)
      .then((productDetails) => {
        this.setState({
          product: productDetails.data,
        });
        console.log("LINE23 This is our oneProduct data", this.state.product);
        // console.log('Product.js LINE 26. Getting all my products ', this.state.postProducts)
        // console.log('Product.js LINE 27. Getting my state search products ', this.state.search)
      })
      .catch((err) => console.log({ err }));
  }
  handleCheckboxChange = (event) => {
    const { name, active } = event.target;
    console.log("This is event LINE29 OneProduct.js", name);

    this.setState({ [name]: active });
  };
  // handleSelection = (e) => {
  //   const { value } e.target

  // }

  render() {
    const { product } = this.state;

    return (
      <section>
        {product ? (
          <div className="container">
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
                      <select>
                        <option className="active" defaultValue>
                          Select size
                        </option>
                        {product.size.map((eachSize, index) => {
                          return <option value={index}>{eachSize}</option>;
                        })}
                      </select>
                    </div>
                  <div className="card-text">
                    <p>Color: </p>
                    <div className="size-box">
                        {product.color.map((eachColor, index) => {
                          return <td class="color-square" value={index}>{eachColor}</td>;
                        })}
                    </div>
                  </div>
{/* 
                  <div class="color-square img_1-2"></div>
                  <div class="color-square img_1-3"></div> */}

                  <a href="#" className="btn btn-primary">
                    Add to Shopping Bag
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading... </h1>
        )}
      </section>
    );
  }
}

export default OneProduct;
