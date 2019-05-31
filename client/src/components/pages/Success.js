import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const StyleHeader1 = styled.h1`
  font-size: 40px;
  text-align: center;
`;

const StyleParagraph = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  font: inherit;
  padding: 0.5em 1em;
  border-radius: 2em;
  text-decoration: none;
  background-color: #bb8fa9;
  color: #fafafa;
  text-align: center;
  transition: all 0.2s;
  border: none;

  :hover {
    background-color: #d8c1cf;
    text-decoration: none;
    color: white;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0.5em 0.3em 0.3em 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 1em 0.3em 0.3em 0;
  }

  @media (min-width: 1025px) {
    margin: 1em 0.3em 0.3em 0;
  }
`;

export default class Success extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <StyleHeader1>Thank You For Your Submission</StyleHeader1>
          <StyleParagraph>
            We will respond to you as soon as possible
          </StyleParagraph>

          <Buttons>
            <StyledLink to="/">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Home
            </StyledLink>
          </Buttons>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
