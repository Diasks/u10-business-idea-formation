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
import GenTemplate from "./components/pages/GenTemplate";
import ItTemplate from "./components/pages/ItTemplate";
import MediaTemplate from "./components/pages/MediaTemplate";
import BuilderTemplate from "./components/pages/BuilderTemplate";
import MyCoverletterTemplates from "./components/pages/MyCoverletterTemplates";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faSignInAlt, faDownload, faArrowAltCircleLeft, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab, faEdit, faSignInAlt, faDownload, faArrowAltCircleLeft, faExclamationCircle);


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Welcome} />
            <Route path="/PageTwo" component={PageTwo} />
            <Route path="/profile" component={Profile} />
            <Route path="/my-cv" component={Profession} />
            <Route path="/coverletters" component={Coverletter} />
            <Route path="/GenTemplate" component={GenTemplate} />
            <Route path="/ItTemplate" component={ItTemplate} />
            <Route path="/MediaTemplate" component={MediaTemplate} />
            <Route path="/BuilderTemplate" component={BuilderTemplate} />
            <Route path="/my-coverletters" component={MyCoverletterTemplates} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
