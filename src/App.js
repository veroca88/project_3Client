import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import Profile from "./components/User/Profile";
import ProductsList from "./components/ProductsList/ProductsList";
import OneProduct from "./components/OneProduct/OneProduct";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import DailyInspirational from "./pages/DailyInspirational";
import Checkout from "./components/ShoppingBag/Checkout";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
           <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/daily-inspiration" component={DailyInspirational} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/products" component={ProductsList}/>
          <Route exact path="/products/:productId" component={OneProduct}/>
          <Route exact path="/shopping-bag/:userId" component={ShoppingBag}/>
          <Route exact path="/checkout" component={Checkout}/>
          
          {/* <Route exact path="/details" render={(props) => (<OneProduct {...props}/>)} /> */}
          {/* <Route exact path='/details' render={(props) => (<DisplayProducts {...props} getProducts={this.getProducts} />
                      )} />*/}
        </Switch>
        <footer>
          Made with
          <span role="img" aria-label="emoji">
            ♥️
          </span>
          by Veroca at Ironhack Miami - PTWD October 2019
        </footer>
      </div>
    );
  }
}

export default App;