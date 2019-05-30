import React, { Component } from "react";
import client from "../../client";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import {
  FormWrap,
  FormInputs,
  FormInputLabel,
  FormControl,
  ErrorMessage,
  MyFontAwesomeIcon,
  FormButton
} from "./Register";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

let formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (formValid(this.state.formErrors)) {
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      client
        .post("/login", user)
        .then(res => {
          localStorage.setItem("cool-jwt", res.data.token);
          localStorage.setItem("user", res.data.user);

          window.location.replace("/profile");
        })
        .catch(function(e) {
          alert(`${e.message}: Wrong email or password.  `);
        });
    } else {
      console.error("Form invalid!");
    }
  }

  render() {
    let { formErrors } = this.state;
    return (
      <FormWrap>
        <FormInputs onSubmit={this.handleSubmit}>
          <FormInputLabel htmlFor="email">Email</FormInputLabel>
          <FormControl
            type="email"
            required
            id="email"
            placeholder="enter your email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />{" "}
          {formErrors.email.length > 0 && (
            <ErrorMessage><MyFontAwesomeIcon icon={faExclamationCircle} /> {formErrors.email}</ErrorMessage>
          )}
          <FormInputLabel htmlFor="password" className="FormInputLabel">
            Password
          </FormInputLabel>
          <FormControl
            type="password"
            required
            id="password"
            placeholder="enter your password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {formErrors.password.length > 0 && (
            <ErrorMessage><MyFontAwesomeIcon icon={faExclamationCircle} /> {formErrors.password}</ErrorMessage>
          )}
          <div>
          <FormButton type="submit">Sign in</FormButton>
          </div>
        </FormInputs>
      </FormWrap>
    );
  }
}

export default Login;
