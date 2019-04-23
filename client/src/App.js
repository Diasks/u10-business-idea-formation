import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Profile from "./components/pages/Profile";
import Welcome from "./components/Welcome";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route path="/profile" component={Profile} />
            <Route path="/" exact component={Welcome} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
