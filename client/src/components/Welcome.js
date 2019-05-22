import React from "react";
import styled from "styled-components/macro";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import PageTwo from "./pages/PageTwo";
import Footer from "./layout/Footer";
import background from '../assets/job.jpg';


export const GetStarted = styled.button`
  color: gray !important;
  text-transform: uppercase;
  padding: 10px 20px 10px 20px;
  border: 0 solid lightgray !important;
  border-radius: 6px;
  font-weight: 700;
  
  :hover {
  color: #ffffff !important;
  background: gray;
  border-color: gray !important;
  transition: all 0.4s ease 0s;
  letter-spacing: 0.125rem;
  }
`;

const WelcomePage = styled.div`
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

const Container = styled.div`
  position: absolute;
  margin: 20px;
  width: auto;
`;

const Navbar = styled.nav`
  overflow: hidden;
`;

const Header = styled.div`
  margin: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-weight: 800;
  font-size: 80px;
  color: white;
  text-transform: uppercase;
  text-stroke: 3.5px gray;
  -webkit-text-stroke: 3.5px gray;

  @media (max-width: 1190px) {
    font-size: 100px;

  @media (max-width: 600px) {
    font-size: 40px;
    text-stroke: 2px gray;
    -webkit-text-stroke: 2px gray;
  }
`;

const Slogan = styled.div`
margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: gray;
  font-style: italic;

  @media (max-width: 1190px) {
    font-size: 20px;
    margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

function Welcome() {
  return (
    <div>
    <WelcomePage>

      <BackgroundImg>

        <Container>
          <Navbar>
            <Router>
            <NavLink to="/PageTwo">
              <GetStarted>Get Started</GetStarted>    
            </NavLink>         
            <Route exact path="/PageTwo" component={PageTwo} />
          </Router>
          </Navbar>
        </Container>

          
          <Header>Formation</Header>
          <Slogan>Branch specific CV templates</Slogan>
        
      </BackgroundImg>
      
    </WelcomePage>
    <Footer />
    </div>
    
  );
}

export default Welcome;
