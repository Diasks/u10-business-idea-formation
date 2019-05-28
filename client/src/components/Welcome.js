import React from "react";
import styled from "styled-components/macro";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import PageTwo from "./pages/PageTwo";
import background from "../assets/homepage.jpg";
import LogoImg from "../assets/formation.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSignInAlt,
  faDownload
} from "@fortawesome/free-solid-svg-icons";

const Body = styled.div`
  height: 800px;
`;

const BackgroundImg = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 800px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  padding: 20px 0 5px 8px;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  @import url(https://fonts.googleapis.com/css?family=Jura);
  color: #826272;
  padding: 25px 20px 10px 20px;
  text-transform: uppercase;
  font-family: "Jura", sans-serif;
  font-size: 18px;
  font-weight: 700;

  :hover {
    color: #bb8fa9;
    text-decoration: none;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  color: lightgray;
`;

const Main = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Jura);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  font-family: "jura", sans-serif;
`;

const HeaderOne = styled.h1`
  text-align: center;
  color: gray;
  margin: 2.5em 0 0.5em 0;
`;

const HeaderThree = styled.h3`
  text-align: center;
  color: #a09f9f;
  margin: 0 0 0.5em 0;
`;

const GetStarted = styled.div`
  text-align: center;
`;

const MyNavLink = styled(NavLink)`
  color: #d8c1cf;
  font-weight: 700;
  font-size: 25px;
  margin: 0.5em 20em 0 20em;
  padding: 20px 15px;
  border-radius: 5px;
  position: relative;

  :hover {
    color: #bb8fa9;
    text-decoration: none;
  }

  :before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #d8c1cf;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  :hover:before {
    visibility: visible;
    width: 100%;
  }
`;

const Circles = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  text-align: center;
  margin-top: 2em;
`;

const Circle = styled.div`
  opacity: 0.7;
  font-size: 11.5px;
  font-weight: bold;
  background-color: #bb8fa9;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 30px;
`;

const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-bottom: 17px;
`;

const WelcomeFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 60px;
  font-size: 8px;
  color: #e7e2e5;
`;

function Welcome() {
  return (
    <div>
      <Body>
        <BackgroundImg>
          <nav>
            <Logo>
              <StyledLink to="/about">About Formation</StyledLink>
              <Img src={LogoImg} alt="Formation Logo" />
              <StyledLink to="/contact">Connect with us</StyledLink>
            </Logo>
            <Line>
              __________________________________________________________________________________________
            </Line>
          </nav>

          <Main>
            <HeaderOne>CV Templates | Cover letters</HeaderOne>
            <HeaderThree>
              Write your resumé using our bransch specific templates.
            </HeaderThree>

            <Router>
              <MyNavLink to="/PageTwo">
                <GetStarted>Get Started</GetStarted>
              </MyNavLink>
                       
              <Route exact path="/PageTwo" component={PageTwo} />
            </Router>

            <Circles>
              <Circle>
                <MyFontAwesomeIcon icon={faEdit} />
                <p>As a registered user you can use our branch specific templates and write cover letters.</p>
              </Circle>
              <Circle>
                <MyFontAwesomeIcon icon={faSignInAlt} />
                <p>Click on the Get Started button to sign in or register to get started already today. </p>
              </Circle>
              <Circle>
                <MyFontAwesomeIcon icon={faDownload} />
                <p>You can download your CV and cover letters in PDF format for free as a registered member. </p>
              </Circle>
            </Circles>
          </Main>
          <WelcomeFooter>© FORMATION 2018</WelcomeFooter>
        </BackgroundImg>
      </Body>
    </div>
  );
}

export default Welcome;
