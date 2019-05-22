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
const FormButton = styled.form`
  position: absolute;
  right: 0;
  margin-top: -35px;
`;

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class MessageForm extends Component {
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

          <Button variant="contained" color="secondary" onClick={this.back}>
            Back
          </Button>
          <FormButton>
            <Button variant="contained" color="primary" onClick={this.continue}>
              Submit
            </Button>
          </FormButton>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default MessageForm;
