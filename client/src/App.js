import React from "react";
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
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faSignInAlt,
  faDownload,
  faArrowAltCircleLeft,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components/macro";

library.add(
  fab,
  faEdit,
  faSignInAlt,
  faDownload,
  faArrowAltCircleLeft,
  faExclamationCircle
);

function addNav(component) {
  const FooterWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  `;

  const Wrapper = styled.div`
    position: relative;
    min-height: 100%;
  `;

  const Content = styled.div`
    padding-bottom: 200px; // the same as height of footer
  `;

  return props => {
    const el = React.createElement(component, props);

    return (
      <Wrapper>
        <Header />
        <Content>{el}</Content>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Wrapper>
    );
  };
}

export default function App() {
  return (
    <Router>
      <Route path="/profile" component={addNav(Profile)} />
      <Route path="/my-cv" component={addNav(Profession)} />
      <Route
        path="/my-coverletters"
        component={addNav(MyCoverletterTemplates)}
      />

      <Route path="/my-templates" component={addNav(MyTemplates)} />
      <Route path="/about" component={addNav(About)} />
      <Route path="/contact" component={addNav(Contact)} />

      <Route path="/general-template" component={GeneralTemplate} />
      <Route path="/it-template" component={ItTemplate} />
      <Route path="/media-template" component={MediaTemplate} />
      <Route path="/builder-template" component={BuilderTemplate} />

      <Route exact path="/" component={Welcome} />
      <Route path="/get-started" component={GetStarted} />
    </Router>
  );
}
