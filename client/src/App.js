import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Welcome from "./components/Welcome";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="formtitle">
            <NavLink to="/PageTwo">Start here</NavLink>
          </div>
          <Route exact path="/PageTwo" component={PageTwo} />

          <div>
            <Welcome />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
