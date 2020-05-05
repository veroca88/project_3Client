import React, { Component } from 'react'

import Table from "react-bootstrap/Table";

import { AuthContext } from "../context/Authentication";

import EmptyShoppingBag from "../ShoppingBag/EmptyShoppingBag";
import PRODUCT_SERVICE from "../services/ProductService";

// import React from "react";

// const ShoppingBag = (props) => {
//   return (
//     <div>
//       <AuthContext.Consumer>
//         {(context) => {
//           const { currentUser, isLoggedIn } = context.state;
//           console.log("This is shoppingbag.js line 21", currentUser);
//           console.log("Length of shopping bag", currentUser.userShoppingCart);
//           return (
//             <>
//               {isLoggedIn ? (
//                 <div className="shop-bag">
//                   <Table className="center" responsive>
//                     <thead>
//                       <tr>
//                         <th>Product</th>
//                         <th>Size</th>
//                         <th>Color</th>
//                         <th>Quantity</th>
//                         <th>Price</th>
//                         <th>Total</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {currentUser.userShoppingCart?.items?.map((eachItem, index) =>
//                       console.log('THIS IS EACHITEM', eachItem)
                     
                    //  <tr key={index}> 
                    //       <td>
                    //         <img
                    //           className="shop-bag-img"
                    //           src={eachItem.image}
                    //         ></img>
                    //       </td>
                    //       <td>{eachItem.size}</td>
                    //       <td>{eachItem.color}</td>
                    //       <td>
                    //         <div className="def-number-input number-input safari_only">
                    //           <button
                    //             // onClick=""
                    //             className="minus"
                    //           ></button>
                    //           <input
                    //             className="quantity"
                    //             min="0"
                    //             name="quantity"
                    //             value={eachItem.quantity}
                    //             type="number"
                    //           />
                    //           <button
                    //             // onClick=""
                    //             className="plus"
                    //           ></button>
                    //         </div>
                    //       </td>
                    //       <td>{eachItem.cost}</td>
                    //       <td>Table cell</td>
                        // </tr>
//                       )}
//                       )
//                     </tbody>
//                   </Table>
//                 </div>
//               ) : (
//                 <EmptyShoppingBag />
//               )}
//             </>
//           );
//         }}
//       </AuthContext.Consumer>
//     </div>
//   );
// };

// export default ShoppingBag;






export default class ShoppingBag extends Component {
  state = {
    user: "",
    quantity: "",
    item: ""
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
    });
  }

  render() {
    return (
      <AuthContext.Consumer>
      {context => {
        const { currentUser , isLoggedIn } = context.state;

      console.log('This is shoppingbaj.js line 21', currentUser)
      return (
          <>
            {isLoggedIn ? (
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
                                // onClick=""
                                className="plus"
                              ></button>
                            </div>
                          </td>
                          <td>{eachItem.cost}</td>
                          <td>Table cell</td>
                        </tr>
                      )}
                      )
                    </tbody>
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
