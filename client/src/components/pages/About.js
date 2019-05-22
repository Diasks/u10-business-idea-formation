import React from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


const Body = styled.div`
  max-width: 980px;
  min-height: 80vh;
  margin: 30px auto;
  height: 100%;
  width: 100%;
`;

const StyleHeader1 = styled.h1`
color: #55273c;
font-size: 40px;
text-align: center;;
`;

const StyleParagraph = styled.p`
font-size: 20px;
color: #55273c;
text-align: center;
`

function About () {
  return (
    <div>
      <Header />
      <Body>
      <StyleHeader1>-Our Mission-</StyleHeader1>

      <StyleParagraph>
      Welcome to Formation, the world leading platform for showcasing your resume or scouting for talents. We provide you with seamless interface, easily adjustable profiles and multiple ways for employers and employees to meet. Our unique algorithm makes sure that you will find exactly what you are looking for, without waiting times or scrolling through useless search results. Try us out today - you won’t be looking back. 
      </StyleParagraph>
      </Body>
      <Footer />
    </div>
  )
}

export default About;
