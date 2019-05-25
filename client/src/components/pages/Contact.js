import React, { Component } from "react";
import UserDetails from "./UserDetails";
import MessageForm from "./MessageForm";
import Success from "./Success";

export class Contact extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, message } = this.state;
    const values = { firstName, lastName, email, message };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <MessageForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Success />;
        default:
          console.log('Default case needed!');
    }
  }
}

export default Contact;
