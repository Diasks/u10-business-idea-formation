import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Header from "../layout/Header";
import styled from "styled-components";
import Footer from "../layout/Footer"

const StyleFooter = styled.footer`
position: absolute
bottom: 0;
width: 100%;
height: 10rem;
`


const StyleHeader1 = styled.h1`
  font-size: 40px;
  text-align: center;
`;


const FormButton = styled.form`
text-align: center;
`;




const MyButton = styled(Button)`
  && { 
  @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);
  cursor: pointer;
  font: inherit;
  padding: 0.3em 1.2em;
  margin: 3em 0 0em 0;
  border-radius: 2em;
  text-decoration: none;
  text-transform: capitalize;
  font-family: "Didact Gothic", sans-serif;
  font-weight: 300;
  background-color: #bb8fa9;
  color: #fafafa;
  text-align: center;
  transition: all 0.2s;
  width: 100px;
  border: none;

  :hover {
    background-color: #d8c1cf;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      margin: 1em 0 1em 0;
    }
    
  }
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
          <FormButton>
          <MyButton
            variant="contained" 
            color="secondary"
            margin="auto"
            onClick={this.back}>
            Back
          </MyButton>
          
          
            <MyButton 
              variant="contained"
              color="primary"
              margin="auto"
              onClick={this.continue}>
              Submit
            </MyButton>
          </FormButton>
          <StyleFooter>
          <Footer />
          </StyleFooter>
          
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default MessageForm;
