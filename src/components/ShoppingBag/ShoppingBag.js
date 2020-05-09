import React, { Component } from 'react'

import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom"

import { AuthContext } from "../context/Authentication";

import EmptyShoppingBag from "../ShoppingBag/EmptyShoppingBag";


export default class ShoppingBag extends Component {
  state = {
    user: "",
    item: "",
    quantity: "",
    price: "",
    totalItem: "",
    totalPurchase: [],
    finalTotal: "",


    orderOrder: ""
  }

  getTotalItem = (quantity, price ) => {
    let total = Number(quantity * price);
    this.state.totalPurchase = total;
    return total
  }

  handleTotal = (user) => {
    if (user.userShoppingCart.items.length > 1) {
      let finalTotal = user.userShoppingCart.items.map(item => item.cost).reduce((a, cv) => a + cv) 
      return finalTotal
    } else {
      return user.userShoppingCart.items[0].cost
    }
    
  }





  render() {
    return (
      <AuthContext.Consumer>
      {context => {
        const { currentUser , isLoggedIn } = context.state;

      console.log('This is shoppingbaj.js line 21', currentUser)
      // console.log('This is iteem', this.state.item)
      return (
          <>
            {isLoggedIn && currentUser?.userShoppingCart?.items?.length > 0? (
              <div className="shop-bag">
                <Table  className="center" responsive>
                  <thead>
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
                     {currentUser.userShoppingCart?.items?.map((eachItem, index) =>                     
                     <tr  key={index}> 
                          <td>
                            <img
                              className="shop-bag-img"
                              alt={eachItem.name}
                              src={eachItem.image}
                            ></img>
                          </td>
                          <td>{eachItem.size}</td>
                          <td>{eachItem.color}</td>
                          <td>
                            <div className="def-number-input number-input safari_only">
                              <button
                                // onClick=""
                                className="minus"
                              ></button>
                              <input
                                className="quantity"
                                min="0"
                                name="quantity"
                                defaultValue="1"
                                type="number"
                              />
                              <button
                                className="plus"
                              ></button>
                            </div>
                          </td>
                          <td>{eachItem.cost}</td>
                     <td id="totalItem">{this.getTotalItem(eachItem.quantity, eachItem.cost)}</td>
                        </tr>
                      )}
                    </tbody>
                </Table>
                <Table>
                  <thead>
                    <tr>
                     <th className="total-pur">TOTAL PURCHASE:</th>
                     <th>$ {this.handleTotal(currentUser)}</th>
                    </tr>
                  </thead>
                  
                </Table>
                <div className="btn-center product-price-btn">
                  <Link to="/checkout">
                  <button>CheckOut</button>
                  </Link>
                </div>

              </div>
            ) : (
              <EmptyShoppingBag />
              )}
          </>
        );
  }}
    </AuthContext.Consumer>
    )
  }
}
