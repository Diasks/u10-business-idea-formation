import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "../layout/Header";
import styled from "styled-components";

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

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <React.Fragment>
          <StyleHeader1>Thank You For Your Submission</StyleHeader1>
          <StyleParagraph>
            We Will Respond To You As Soon As Possible
          </StyleParagraph>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
