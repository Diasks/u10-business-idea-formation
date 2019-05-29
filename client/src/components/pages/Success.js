import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "../layout/Header";
import styled from "styled-components";
import Footer from "../layout/Footer"
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

const StyleFooter = styled.footer`
position: absolute
bottom: 0;
width: 100%;
height: 10rem;
`

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <React.Fragment>
          <StyleHeader1>Thank You For Your Submission</StyleHeader1>
          <StyleParagraph>
            We will respond to you as soon as possible
          </StyleParagraph>
          <StyleFooter>
          <Footer />
          </StyleFooter>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
