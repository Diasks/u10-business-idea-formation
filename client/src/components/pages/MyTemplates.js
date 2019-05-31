import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
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

export default class MyTemplates extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProfessionHeader>Future feature..</ProfessionHeader>
        <Buttons>
          <StyledLink to="/profile">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Profile
          </StyledLink>
        </Buttons>
        <Footer />
      </div>
    );
  }
}
