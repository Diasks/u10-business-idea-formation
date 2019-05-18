import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/pages/Profile";
import Welcome from "./components/Welcome";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import "./App.css";
import PageTwo from "./components/pages/PageTwo";
import Profession from "./components/pages/Profession";
import Coverletter from "./components/pages/Coverletter";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/PageTwo" component={PageTwo} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/Profession" component={Profession} />
            <Route exact path="/coverletters" component={Coverletter} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
