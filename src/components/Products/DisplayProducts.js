
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Container, Row, div } from 'react-bootstrap'


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
    handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        this.setState({ [name]: checked });
    };

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
                        <img src={product.image} alt={product.name}/>
                        <Link to={{ pathname: "details", state: { data: product }}}>
                            <p>Product: {product.name}</p>
                        </Link>
                        <p>cost: ${product.cost}</p>
                        <p>material: {product.material}</p>
                        <a href="#">In Stock: {product.designer ? "Yes" : "No"}</a>
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

{/* <div class="cardview">
	<img style="background-image:url(https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c1bf7fae077ff9688f62d7a89487a343)"/>
	<section class="content">
	 <h1>Material Design</h1>
	 <p> mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...</p>
	<a href="#">Read More</a>
		</section>
	 </div> */}