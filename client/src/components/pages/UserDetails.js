import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Header from "../layout/Header";
import styled from "styled-components";

const StyleHeader1 = styled.h1`
  font-size: 40px;
  text-align: center;
`;

const StyleForm = styled.form`
  text-align: center;
`;

const FormButton = styled.form`
  text-align: center;
`;

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <React.Fragment>
          <StyleHeader1>User Details</StyleHeader1>
          <StyleForm>
            <TextField
              id="filled-name"
              label="Name"
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
          <FormButton>
            <Button
              variant="contained"
              color="primary"
              margin="auto"
              onClick={this.continue}
            >
              Continue
            </Button>
          </FormButton>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default UserDetails;
