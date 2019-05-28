import React from "react";
import styled from "styled-components";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Body = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  height: 100%;
  width: 100%;
  padding: 40px;
  font-family: 'Didact Gothic', sans-serif;
  background: linear-gradient(#f7e5f0, #fffbfd);
`;

const StyleHeader1 = styled.h1`
color: #616161;
font-size: 40px;
text-align: center;
  
@media (min-width: 320px) and (max-width: 480px) {
  font-size: 32px;
}
`;

const StyleParagraph = styled.p`
font-size: 20px;
color: gray;
text-align: center;
margin: 10px 40px;

@media (min-width: 320px) and (max-width: 480px) {
  font-size: 14px;
  margin: 10px;
}
`;

const StyledLink = styled(Link)`
 display: flex;
 justify-content: center;
 padding: 0.3em 1.2em;
 margin-top: 10px;
 border-radius:2em;
 border: none;
 box-sizing: border-box;
 text-decoration:none;
 font-weight: 700;
 color: rgb(219, 171, 213);
 text-align: center;
 transition: all 0.2s;

:hover {
  color: darkgray;
  text-decoration: none;
  }

`;

const MyFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 5px;
`;

function About () {
  return (
    <div>
      <Body>
      <StyleHeader1>Our Mission</StyleHeader1>

      <StyleParagraph>
      Welcome to Formation, the world leading platform for showcasing your resume or scouting for talents. We provide you with seamless interface, easily adjustable profiles and multiple ways for employers and employees to meet. Our unique algorithm makes sure that you will find exactly what you are looking for, without waiting times or scrolling through useless search results. Try us out today - you won’t be looking back. 
      </StyleParagraph>

      <StyleParagraph>
        Formation is made by Diana Skshipek, Astrid Sinabian, Jennifer Söderberg, Oksana Kanterova and Diego Pinones who study at Chas Academy, Stockholm. This application was made for our 10th assignment as an buisness idea. 
      </StyleParagraph>

      <StyledLink to="/"><MyFontAwesomeIcon icon={faArrowAltCircleLeft} /> Back to Home</StyledLink>

      </Body>
      <Footer />
    </div>
  )
}

export default About;
