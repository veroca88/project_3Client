import React, { Component } from 'react'

import Table from "react-bootstrap/Table";

import { AuthContext } from "../context/Authentication";

import EmptyShoppingBag from "../ShoppingBag/EmptyShoppingBag";


export default class ShoppingBag extends Component {
  state = {
    user: "",
    item: "",
    quantity: "",
    price: "",
    totalItem: "",
    totalPurchase: []
  }

  componentDidMount() {
    // const { productDetail } =  this.props.location.state
    console.log("ComponentDidMount in shopping cart..", this.props.location);

    const currentUser = this.props.location?.state?.currentUser
      ? this.props.location.state.currentUser
      : this.state.user;
    this.setState({
      item: currentUser.userShoppingCart.items,
      user: currentUser,
      quantity: currentUser.userShoppingCart.items.quantity,
    });
  }

  getTotalItem = (quantity, price ) => {
    let total = quantity * price;
    // this.state.totalItem = total
    // this.state.totalPurchase = Number(this.state.totalItem)

    // const { userShoppingCart } = this.state.user
  //   console.log('IIIIIIIIIIIIIIIIIIIIIII', this.state.user.userShoppingCart)
  //   let valueShoppingBag = this.props.location?.state?.currentUser?.userShoppingCart
    
  //   const search = 'items'
  //    const filtered = valueShoppingBag.filter(item => {
  //     return Object.keys(item).some((key)=>item[key].includes(search));
  //    })
  //    console.log(filtered)
     
 
  // }




    // this.state.totalPurchase = this.state.totalPurchase.push(Number(this.state.totalItem))






    console.log('..............', this.state.totalItem)
    console.log('..............', this.state.totalPurchase)
    return total
    // this.setState(prevState => ({
    //   ...prevState,
    //   totalItem: total
    // }))
  }

  // getTotalPurchase = () => {
   

  // }

  // handleChange = (e) => {
  //   e.preventDEfault();
  //   const {name, value} = e.target
  //   console.log('THIS IS VALUE', value)
  //   console.log('THIS IS NAME', name)
  // }




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
                <Table className="center" responsive>
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
                  <tbody>
                     {currentUser.userShoppingCart?.items?.map((eachItem, index) =>                     
                     <tr key={index}> 
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
                                value={eachItem.quantity}
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
                     <th>TOTAL PURCHASE:</th>
                     <th></th>
                    </tr>
                  </thead>
                  
                </Table>
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
