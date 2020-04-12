import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// const tabs = document.querySelectorAll(".tab");

// tabs.forEach((clickedTab) => {
//   clickedTab.addEventListener("click", () => {
//     tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//     clickedTab.classList.add("active");
//   });
// });

class ProductList extends React.Component {
  state = {
    name: "",
    cost: 0,
    designer: false,
    material: "",
    image: "",
    updated: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  // this wil handle changing of true and false value for a checkbox since you have to check the event.target.checked option for true or false. If we just check the event.target.value we will get a value of "on" or "off".
  // handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;

  //   this.setState({ [name]: checked });
  // };

  // handleAddProduct = (event) => {
      
  // }

  // when the file input changes we have to check for the uploaded info from event.target.files which gives us an array. To submit the file selected you normally get the first element in the array [0]. If your doing multiple file uploads then you would just pass the entire array.
  handleImageChange = (event) => {
    const { files } = event.target;

    this.setState({ image: files[0] });
  };

  viewProducts = () => {
    return this.state.allProducts?.length > 0 ? (
      this.state.allProducts.map((product, index) => {
        return (
          // item
          <div className="cardview">
            <div className="content" key={index}>
              <Link to={{ pathname: "details", state: { data: product } }}>
                <img src={product.image} alt={product.name} />
                <p>Product: {product.name}</p>
                <p>cost: ${product.cost}</p>
              </Link>

              <div>
                  <i className="far fa-heart heart-click"></i>
              </div>

              {/* option2 */}
              {/* <div class="tab pink">
                <Button variant="danger">
                  <i class="far fa-heart"></i>
                </Button>
              </div> */}
              {/* <p>material: {product.material}</p>
                            <a href="#">In Stock: {product.designer ? "Yes" : "No"}</a> */}
            </div>
          </div>
        );
      })
    ) : (
      <h2>No Products to Display</h2>
    );
  };

  getProductList = () => {
    if (this.state.allProducts !== this.props.allProducts) {
      this.setState({
        allProducts: this.props.allProducts,
      });
    }
  };

  render() {
    return (
      // container className="cardview"
      <div className="box-products">
        {this.getProductList()}
        {this.state.allProducts && this.viewProducts()}
        {/* {(<div>{this.state.allProducts}</div> && <div className="cardview">{this.viewProducts()}</div>)} */}
      </div>
    );
  }
}

export default ProductList;
