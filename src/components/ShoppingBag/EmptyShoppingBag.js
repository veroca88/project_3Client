
import React from 'react'
import Table from "react-bootstrap/Table";


export default function EmptyShoppingBag() {
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
      </Table>
          <h5 className="text-empty-shop" >
            Your Shopping Bag is Empty
          </h5>
    </div>
    )
}
