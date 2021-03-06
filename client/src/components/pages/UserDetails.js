import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  font-family: "Didact Gothic", sans-serif;
  background: linear-gradient(#f7e5f0, #fffbfd);
`;

const StyleHeader1 = styled.h1`
  @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
  font-size: 40px;
  text-align: center;
  font-family: "Didact Gothic", sans-serif;
  color: #616161;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 35px;
  }

  @media (min-width: 1025px) {
    font-size: 45px;
  }
`;

const StyleForm = styled.form`
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

export default class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Body>
            <StyleHeader1>Connect with us</StyleHeader1>
            <StyleForm>
              <TextField
                id="filled-name"
                label="First Name"
                margin="normal"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
              />
              <br />
              <TextField
                id="filled-name"
                label="Last Name"
                margin="normal"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
              />
              <br />
              <TextField
                id="filled-name"
                label="Email"
                margin="normal"
                onChange={handleChange("email")}
                defaultValue={values.email}
              />

              <br />
            </StyleForm>
            <Buttons>
              <StyledLink to="/" onClick={this.continue}>
                {" "}
                Continue
              </StyledLink>
            </Buttons>
            <Buttons>
              <StyledLink to="/">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Home
              </StyledLink>
            </Buttons>
          </Body>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
