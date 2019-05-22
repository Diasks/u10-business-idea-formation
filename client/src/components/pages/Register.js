import React, { Component } from 'react';	
			import axios from 'axios';
			import styled from "styled-components/macro";
		

			export const FormWrap = styled.div `
			margin: 50px 100px 100px 10px;
			`;

			export const FormInputs = styled.form `	
			margin-bottom: 40px;
			`;
			  
			export const FormInputLabel = styled.label `
			display: block;
			text-transform: uppercase;
			font-size: .9em;
			font-weight: bold;
			color: darkgray;
			margin-top: 20px;
			`;

			export const FormControl = styled.input `
			    width: 100%;
				background-color: transparent;
				border: 2px solid lightgray;
				border-radius: 20px;
				color: gray;
				outline: none;
				font-size: 1em;
				font-weight: 300;
				padding: 10px;
				margin: 10px 0;

				:focus {
					border: 2px solid gray;
				}
			`; 
			  
			export const ErrorMessage = styled.span `
			font-size: 1,5em;
			margin: 10px;
			`;


			export const FormButton = styled.button `
			background-color: lightgray;
			margin-top: 40px;
			color: gray;
			border: none;
			outline: none;
			border-radius: 25px;
			padding: 15px 70px;
			font-size: .8em;
			font-weight: 500;

			:hover {
				background-color: gray;
				color: white;
			}
			`; 


			const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

			
let formValid = formErrors => {
	let valid = true;

	Object.values(formErrors).forEach( val => {
		val.length > 0 && (valid=false);
	});
	return valid;
};

			
			export class Register extends Component {
			constructor() {
			super();
			
			
			this.state = {
			first_name: '',
			last_name: '',
			password: '',
			email: '',
			formErrors: {
				first_name: '',
			last_name: '',
			password: '',
			email: '',
			}
			};
			
			
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			
			
			}
			
			
			handleChange(e) {
				e.preventDefault();
			let target = e.target;
			let value = target.value;
			let name = target.name;
			let formErrors = this.state.formErrors;

			switch(name) {
				case 'first_name':
				formErrors.first_name = value.length < 3  ? 'minimum 3 characters required'
				: '';
				break;
				case 'last_name': 
				formErrors.last_name = value.length < 3  ? 'minimum 3 characters required'
				: '';
				break;
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
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			password: this.state.password,
			email: this.state.email
			};
			
			axios.post(`http://localhost:4000/users`,  user )
			.then(res => {
			this.props.history.push("/login");
			}).catch(err => {
				err.status(400).send('unable to save to database');
			});
		}
		else 
		{console.error('Form invalid!')};
			
			}
			
			
			render () {
			let {formErrors} = this.state;
			return (
			
				<FormWrap> 
		



			<FormInputs onSubmit={this.handleSubmit}>
		
			<FormInputLabel htmlFor="first_name">Firstname</FormInputLabel>
			<FormControl type="text" id="first_name" placeholder="enter your firstname" required name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
			{formErrors.first_name.length >0 &&  (
				<ErrorMessage>{formErrors.first_name}</ErrorMessage>
			)}
			
	

	
			<FormInputLabel htmlFor="last_name">Lastname</FormInputLabel>
			<FormControl type="text" id="last_name" placeholder="enter your lastname" required name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
			{formErrors.last_name.length >0 && (
				<ErrorMessage>{formErrors.last_name}</ErrorMessage>
			)}
			
		
			
	
			<FormInputLabel htmlFor="password">Password</FormInputLabel>
			<FormControl type="password" id="password" placeholder="enter a password " required name="password" value={this.state.password} onChange={this.handleChange} />
			{formErrors.password.length >0 && (
				<ErrorMessage>{formErrors.password}</ErrorMessage>
			)}
			
		
			
	
			<FormInputLabel htmlFor="email">Email</FormInputLabel>
			<FormControl type="email" id="email" placeholder="enter your email" required name="email" value={this.state.email} onChange={this.handleChange}/>
			{formErrors.email.length >0 && (
				<ErrorMessage>{formErrors.email}</ErrorMessage>
			)}
			
			
		
			
			

				<FormButton type="submit">Register</FormButton>  
			
	
       
			

			</FormInputs>
			</FormWrap>
			
			)}
			}
			export default Register;