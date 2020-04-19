import React, {Component} from 'react';
import axios from 'axios';

class OneProduct extends Component {
  state = {
    product: undefined,
    id: this.props.match.params.productId
    // id: this.props.location.state.data._id    
  }

  componentDidMount () {
    // console.log('Get product ONneProduct.js LINE15 ..........', {id : this.props.match.params.productId})
    // const id = this.props.match.params.productId
    axios
      .get(`http://localhost:3001/products/${this.state.id}`)
      .then((productDetails) => {
        this.setState({
          product: productDetails.data
        });
        console.log('THis is our oneProduct data', this.state.product)
        // console.log('Product.js LINE 26. Getting all my products ', this.state.postProducts)
          // console.log('Product.js LINE 27. Getting my state search products ', this.state.search)
      })
      .catch((err) => console.log({ err }));
    };
  render() {
    const {product} = this.state
    return (
      <section>

        {product ? (
          <div class="container py-3">
    <div class="card">
      <div class="row ">
        <div class="col-md-4">
            <img src={product.image} class="w-100" />
          </div>
          <div class="col-md-8 px-3">
            <div class="card-block px-3">
    <h4 class="card-title">{product.name}</h4>
        <p class="card-text">{product.material}</p>
        <p class="card-text">{product.cost}</p>
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </div>

        ) : (
          <h1>Loading... </h1>
        )
        }
  
</section>
    )
  }
}

export default OneProduct;