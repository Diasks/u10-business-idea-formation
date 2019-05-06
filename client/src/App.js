import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Profile from "./components/pages/Profile";
import Welcome from "./components/Welcome";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import "./App.css";
import PageTwo from "./components/pages/PageTwo";
import Profession from "./components/pages/Profession";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
       

          <div>
            <Route path="/Profile" exact component={Profile} />
            <Route path="/" exact component={Welcome} />
            <Route path="/PageTwo" exact component={PageTwo} />
            <Route path="/Profession" exact component={Profession} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
            <Footer />
          </div>
 
        </div>

      </Router>
    );
  }
}

export default App;
