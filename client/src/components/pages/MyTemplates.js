import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import GeneralImg from "../../assets/general.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";




const ProfessionHeader = styled.h1`
  @import url(https://fonts.googleapis.com/css?family=BenchNine:700);
  display: flex;
  justify-content: center;
  margin: 100px 10px 40px 10px;
  text-align: justify;
  font-family: "BenchNine";
  line-height: 0.8;
  text-transform: uppercase;
  letter-spacing: 0px;
  color: #bb8fa9;
  font-size: 4em;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 3em;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 8em;
    margin: 110px 10px 40px 10px;
  }
`;



const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
   padding: 1em 2em;
   margin-bottom: 4em;
   border-radius: 2em;
   border: none;
   box-sizing: border-box;
   text-decoration: none;
   font-weight: 300;
   color: #ffffff;
   background-color: #bb8fa9;
   text-align: center;
   transition: all 0.2s;

  :hover {
    background-color: #d8c1cf;
    text-decoration: none;
    color: #ffffff;
  }

`;

const Card = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin: 40px;

  :hover {
    box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
    border-radius: 5px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 270px;
  }
  
  
`;



class MyTemplates extends Component {
  constructor() {
    super();

  }

  

  render() {
    return (
      <div>
        <Header />
        <ProfessionHeader>Future feature..</ProfessionHeader>
       
      
          
         

      
          

         
          
          
 
        <Buttons>
          <StyledLink to="/profile"><FontAwesomeIcon icon={faArrowAltCircleLeft} /> Profile</StyledLink>
        </Buttons>
        <Footer />
      </div>
    );
  }
}

export default MyTemplates;
