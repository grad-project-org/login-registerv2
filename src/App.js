import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Navigation from "./Navigation";
import { Router } from "@reach/router";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Router>
          <Home path="/" />
          <Login path="/login" />

          <Register path="/register" registerUser={this.registerUser} />
        </Router>
      </div>
    );
  }
}

export default App;
