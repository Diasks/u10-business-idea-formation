import React from "react";
import styled from "styled-components/macro";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { colors, TemplatePicture } from "./Common";
import PageTwo from "./pages/PageTwo";
import Footer from "./layout/Footer";

import AppealPic from "../assets/placeholder.png";

const Halves = styled.div`
  display: flex;
  flex: 1 100%;
  height: 650px;

  @media (max-width: 800px) {
    height: 500px;

  @media (max-width: 600px) {
    flex-flow: row wrap
`;

const LeftHalf = styled.div`
  width: 100%;
  background-color: ${colors.Cerulean};
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 1190px) {
    justify-content: flex-start;

  @media (max-width: 600px) {
    height: 250px;
    align-items: baseline;
`;

const RightHalf = styled.div`
  width: 100%;
  background-color: ${colors.Tapestry};
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1190px) {
    justify-content: flex-start;

  @media (max-width: 600px) {
    justify-content: flex-end;
    height: 250px;
`;

export const GetStarted = styled.button`
  background-color: ${colors.LividBrown};
  border-radius: 40px;
  height: 40px;
  width: 150px;
  padding: 0;
  margin: 30px 0 30px 0;
  border: 2px solid ${colors.Cerulean};
  font-weight: 700;
  color: white;
  z-index: 3000;

  &:hover {
    opacity: 0.9;
  }
`;

const Slogan = styled.div`
  z-index: 2000;
  color: black;
  font-style: italic;
  font-size: 16px;
  padding-left: 80px;
`;

const Switch = styled.h1`
  z-index: 2000;
  font-weight: 800;
  font-size: 80px;
  color: white;
  padding-left: 80px;
  text-transform: uppercase;
  text-stroke: 2px ${colors.Tapestry};
  -webkit-text-stroke: 2px ${colors.Tapestry};

  @media (max-width: 1190px) {
    font-size: 70px;

  @media (max-width: 600px) {
    font-size: 56px;
  }
`;

const Logo = styled.div`
  position: absolute;
  left: calc(50% - 380px / 2);
  top: 100px;
  border-radius: 50%;
  height: 380px;
  width: 380px;
  background-color: ${colors.Melanie};
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: 280px;
    width: 280px;
    left: calc(50% - 280px / 2);
    top: 100px;
  }
`;

const Offer = styled.div`
  background-color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0 50px 0;
`;

const Appeal = styled.div`
  height: 200px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 12px;
`;

const AppealTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: black;

  
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const AppealPicture = styled.div`
  height: 117px;
  width: 117px;
  background-image: url(${AppealPic});
`;

const WelcomePage = styled.div`
  height: 1000px;
`;

function Welcome() {
  return (
    <WelcomePage>
      <Halves>
        <LeftHalf>
          <Slogan>Never too late to</Slogan>
          <Switch>Switch</Switch>
        </LeftHalf>
        <Logo>
          <TemplatePicture />
        </Logo>
        <RightHalf>
          <Router>
            <NavLink to="/PageTwo">
              <GetStarted>Get Started</GetStarted>
            </NavLink>
                            
            <Route exact path="/PageTwo" component={PageTwo} />
          </Router>
        </RightHalf>
      </Halves>
      <Offer>
        <Appeal>
          <AppealTitle>Free & premium templates</AppealTitle>
          <AppealPicture />
        </Appeal>
        <Appeal>
          <AppealTitle>Colorful designs & easy to make</AppealTitle>
          <AppealPicture />
        </Appeal>
        <Appeal>
          <AppealTitle>Cover letter & resume expertise</AppealTitle>
          <AppealPicture />
        </Appeal>
      </Offer>
      <Footer />
    </WelcomePage>
  );
}

export default Welcome;
