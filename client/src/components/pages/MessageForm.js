import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Header from "../layout/Header";
import styled from "styled-components";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const StyleFooter = styled.footer`
position: absolute
bottom: 0;
width: 100%;
height: 10rem;
`;

const StyleHeader1 = styled.h1`
  font-size: 40px;
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

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export default class MessageForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Header />

        <React.Fragment>
          <StyleHeader1>Message</StyleHeader1>
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            fullWidth
            rowsMax="20"
            margin="normal"
            onChange={handleChange("Message")}
            defaultValue={values.message}
          />
          <br />

          <Buttons>
            <StyledLink to="/" onClick={this.back}>
              {" "}
              Back
            </StyledLink>
            <StyledLink to="/" onClick={this.continue}>
              {" "}
              Send
            </StyledLink>
          </Buttons>

          <StyleFooter>
            <Footer />
          </StyleFooter>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}