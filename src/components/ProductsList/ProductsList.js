import React from "react";

import { Link } from "react-router-dom";

class ProductList extends React.Component {
  render() {
    const { name, cost, image, _id } = this.props;
    return (
        <div className="cardview">
        <div  className="content">
        {/* <Route exact path="/details" render={(props) => (<OneProduct {...props}/>)} /> */}
          <Link to={`/details/${_id}`}>
            <img src={image} alt={name}/>
          </Link>
            <p >{name}</p>
            <p >${cost}</p>
          <div>
              <i className="far fa-heart heart-click"></i>
          </div>                                                                    
        </div>
      </div>
    );
  }
}

export default ProductList;
