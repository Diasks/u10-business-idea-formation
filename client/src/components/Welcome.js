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
  height: 965px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  padding: 30px 0 5px 8px;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
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

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 11px;
    padding: 14px 10px 0 10px;
    text-align: center;
  }
  
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  color: lightgray;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 16px;
    font-size: 6px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 60px;
    font-size: 8px;
  }
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

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    font-weight: bold;
    margin-top: 1.7em;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 22px;
    font-weight: bold;
    margin-top: 1.7em;
  }
`;

const HeaderThree = styled.h3`
  text-align: center;
  color: #a09f9f;
  margin: 0 0 0.5em 0;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 15px;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    font-size: 24px;
  }
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

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0.5em 5em 0 5em;
    font-size: 14px;
    border: 1px solid #bb8fa9;
    padding: 10px;
    margin: 35px 110px 18px 110px;

  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 0.7em 10em 0 10em;
    font-size: 18px;
    padding: 10px;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    margin: 0.7em 12em 0 12em;
    font-size: 25px;
    padding: 10px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: 0.7em 15em 0 15em;
    font-size: 28px;
    padding: 10px;
  }
`;

const Circles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2em;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
    margin-top: 20px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-top: 50px;
  }
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

  @media (min-width: 320px) and (max-width: 480px) {
    background-color: #ffffff00;
    width: 280px;
    height: 100px;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 40px;
  }

  @media (min-width: 481px) and (max-width: 569px) {
    width: 170px;
    height: 170px;
    margin: 10px;
    padding: 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 200px;
    height: 200px;
    margin: 10px;
    padding: 30px;
    font-size: 12px;
  }

`;

const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-bottom: 17px;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    margin: 10px 0;
  }
`;

const WelcomeFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 60px;
  font-size: 8px;
  color: #e7e2e5;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 30em;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    color: #ffffff00;
    padding: 0;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    padding-top: 30em;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    padding-top: 25em;
  }

  @media (min-width: 1281px) {
    padding-top: 28em;
  }
  
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
          <WelcomeFooter>© FORMATION 2019</WelcomeFooter>
        </BackgroundImg>
      </Body>
    </div>
  );
}

export default Welcome;
