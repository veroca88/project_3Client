import React from "react";
import {Switch, Route} from 'react-router-dom'

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Signup from "./components/Authentication/Signup"

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Signup} />
        {/* <Route exact path='/private' component={Private} /> */}
      </Switch>
      <footer>
        Made with
        <span role='img' aria-label='emoji'>
          ♥️
        </span>
        at Ironhack Miami - PTWD October 2019
      </footer>
    </div>
  );
}

export default App;
