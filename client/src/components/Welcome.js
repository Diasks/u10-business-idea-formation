import React from "react";
import styled from "styled-components/macro";
import TemplatePic from "../assets/template-pic.png";
import AppealPic from "../assets/placeholder.png";

const LividBrown = "#55273c";
const Cerulean = "#00c0fd";
const Tapestry = "#ae6488";
const Melanie = "#e4bdd0";
const Lily = "#bf9ead";

const Halves = styled.div`
  display: flex;
  flex: 1 1;
  height: 500px;
`;

const LeftHalf = styled.div`
  width: 100%;
  background-color: ${Cerulean};
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const RightHalf = styled.div`
  width: 100%;
  background-color: ${Tapestry};
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const GetStarted = styled.button`
  background-color: ${LividBrown};
  border-radius: 40px;
  height: 40px;
  width: 150px;
  padding: 0;
  margin-bottom: 30px;
  border: 2px solid ${Cerulean};
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
  text-stroke: 2px ${Tapestry};
  -webkit-text-stroke: 2px ${Tapestry};
}
`;

const Logo = styled.div`
  position: absolute;
  left: calc(50% - 380px / 2);
  top: 100px;
  border-radius: 50%;
  height: 380px;
  width: 380px;
  background-color: ${Melanie};
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TemplatePicture = styled.div`
  height: 255px;
  width: 175px;
  z-index: 1000;
  background-image: url(${TemplatePic});
  box-shadow: 8px 8px 0 0 ${Lily};
`;

const Offer = styled.div`
  height: 535px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Appeal = styled.div`
  height: 200px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const AppealTitle = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: black;
`;

const AppealPicture = styled.div`
  height: 117px;
  width: 117px;
  background-image: url(${AppealPic});
`;

const WelcomePage = styled.div``;

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
          <GetStarted>Get Started</GetStarted>
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
    </WelcomePage>
  );
}

export default Welcome;
