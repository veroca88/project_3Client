import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import Profile from "./components/User/Profile";
import DisplayProducts from "./components/Products/DisplayProducts";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import axios from "axios";

class App extends React.Component {
  state = {
    postProducts: null,
  };

  componentDidMount () {
    this.getProducts();
  };

  getProducts = () => {
    axios
      .get('http://localhost:3001/products')
      .then((productsFromAPI) => {
        this.setState({
          postProducts: productsFromAPI.data,
        });
        console.log('getting all my products ==================================', productsFromAPI.data[0] )
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
        <Route
            exact
            path="/products"
            render={(props) => (
              <DisplayProducts
              {...props}
                getProducts={this.getProducts}
                allProducts={this.state.postProducts}
              />
            )}
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path='/details' render={(props) => (<DisplayProducts {...props} getProducts={this.getProducts} />
                      )} />*/}
        </Switch>
        <footer>
          Made with
          <span role="img" aria-label="emoji">
            ♥️
          </span>
          at Ironhack Miami - PTWD October 2019
        </footer>
      </div>
    );
  }
}

export default App;
