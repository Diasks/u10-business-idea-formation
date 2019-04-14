import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Profile from "./components/pages/Profile";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Footer from "./components/layout/Footer";
import Welcome from "./components/Welcome";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            {
              // TODO
              //<Header />
              //<Route path="/login" component={Login} />
              //<Route exact path="/profile" component={Profile} />
              //<Route exact path="/register" component={Register} />
              //<Footer />
            }
            <Welcome />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
