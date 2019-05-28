import React from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Body = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
  max-width: 980px;
  min-height: 80vh;
  margin: 30px auto;
  height: 100%;
  width: 100%;
  font-family: 'Didact Gothic', sans-serif;
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

@media (min-width: 320px) and (max-width: 480px) {
  padding: 5px 60px 10px 60px;
  font-size: 16px;
}

@media (min-width: 768px) and (max-width: 1024px) {
 padding: 15px 100px 10px 100px;
}
`

function About () {
  return (
    <div>
      <Header />
      <Body>
      <StyleHeader1>Our Mission</StyleHeader1>

      <StyleParagraph>
      Welcome to Formation, the world leading platform for showcasing your resume or scouting for talents. We provide you with seamless interface, easily adjustable profiles and multiple ways for employers and employees to meet. Our unique algorithm makes sure that you will find exactly what you are looking for, without waiting times or scrolling through useless search results. Try us out today - you won’t be looking back. 
      </StyleParagraph>
      </Body>
      <Footer />
    </div>
  )
}

export default About;
