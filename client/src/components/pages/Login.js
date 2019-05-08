import React, { Component } from "react";
import axios from "axios";
import { FormWrap, FormInputs, FormInputLabel, FormControl, ErrorMessage, FormButton } from "./Register";
		
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

let formValid = formErrors => {
	let valid = true;

	Object.values(formErrors).forEach( val => {
		val.length > 0 && (valid=false);
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
		email: '',
	password: ''
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

	switch(name) {
		case 'email': 
		formErrors.email = emailRegex.test(value)  ? ''
		: "invalid email address";
		break;
		case 'password': 
		formErrors.password = value.length < 6  ? 'minimum 6 characters required'
		: '';
		break;
		default:
		break;

	}

    this.setState({formErrors,
      [name]: value
    });
  }

  //Kopplad till backenden(!!)
  handleSubmit(e) {
	e.preventDefault();
	if (formValid(this.state.formErrors)) { 

		const user = {
			email: this.state.email,
			password: this.state.password
		  };

	axios.post(`http://localhost:4000/api/login`, user)
		.then(res => {
			console.log(res);
			console.log(res.data);
			localStorage.setItem("cool-jwt", res.data.token);
      localStorage.setItem("user", res.data.user);
      const path = '/Profile';
      this.props.history.push(path);
    	}).catch(function(e) {
			alert(`${e.message}: Wrong email or password.  `);
		
		});
	}
	else{console.error('Form invalid!')};
}

  render() {
	let {formErrors} = this.state;
    return (
      <FormWrap> 
        <FormInputs onSubmit={this.handleSubmit}>

			<FormInputLabel htmlFor="email">
              Email
            </FormInputLabel>
            <FormControl
              type="email" required
              id="email"
              placeholder="enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            /> {formErrors.email.length >0 && (
              <ErrorMessage>{formErrors.email}</ErrorMessage>
            )}
      

     
            <FormInputLabel htmlFor="password" className="FormInputLabel">
              Password
            </FormInputLabel>
            <FormControl
              type="password" required
              id="password"
              placeholder="enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />{formErrors.password.length >0 && (
				<ErrorMessage>{formErrors.password}</ErrorMessage>
			)}
      

			  
            <FormButton type="submit">
              Sign in
            </FormButton>
        
        </FormInputs>
        </FormWrap>
    );
  }
}

export default Login;
