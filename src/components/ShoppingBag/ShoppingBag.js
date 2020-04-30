import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class ShoppingBag extends Component {
  state = {
    quantity: 0,
    orderItem: "",
  };

  componentDidMount() {
    const order = this.props.location?.state?.item
      ? this.props.location?.state?.item
      : this.state.orderItem;
    this.setState({
      orderItem: order,
    });
  }
  render() {
    const {
      name,
      image,
      cost,
      material,
      size,
      color,
      id,
    } = this.state.orderItem;
    return (
      <div className="shop-bag">
        <Table className="center" responsive>
          <thead >
            <tr>
              <th>Product</th>
              <th>Size</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>
                <img className="shop-bag-img" src={image}></img>
              </td>
              <td>{size}</td>
              <td>{color}</td>
              <td>
                <div className="def-number-input number-input safari_only">
                  <button
                    onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    className="minus"
                  ></button>
                  <input
                    className="quantity"
                    min="0"
                    name="quantity"
                    value="1"
                    type="number"
                  />
                  <button
                    onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    className="plus"
                  ></button>
                </div>
              </td>
              <td>{cost}</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
