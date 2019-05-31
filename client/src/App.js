import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/pages/Profile";
import Welcome from "./components/Welcome";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import "./App.css";
import GetStarted from "./components/pages/GetStarted";
import Profession from "./components/pages/Profession";
import GeneralTemplate from "./components/pages/GeneralTemplate";
import ItTemplate from "./components/pages/ItTemplate";
import MediaTemplate from "./components/pages/MediaTemplate";
import BuilderTemplate from "./components/pages/BuilderTemplate";
import MyCoverletterTemplates from "./components/pages/MyCoverletterTemplates";
import MyTemplates from "./components/pages/MyTemplates";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faSignInAlt,
  faDownload,
  faArrowAltCircleLeft,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faEdit,
  faSignInAlt,
  faDownload,
  faArrowAltCircleLeft,
  faExclamationCircle
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Welcome} />
            <Route path="/get-started" component={GetStarted} />
            <Route path="/profile" component={Profile} />
            <Route path="/my-cv" component={Profession} />
            <Route path="/general-template" component={GeneralTemplate} />
            <Route path="/it-template" component={ItTemplate} />
            <Route path="/media-template" component={MediaTemplate} />
            <Route path="/builder-template" component={BuilderTemplate} />
            <Route path="/my-coverletters" component={MyCoverletterTemplates} />
            <Route path="/my-templates" component={MyTemplates} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
