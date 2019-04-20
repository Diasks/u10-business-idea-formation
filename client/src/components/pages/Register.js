import React, { Component } from 'react';	

			import axios from 'axios';
		

			var emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

			
var formValid = formErrors => {
	var valid = true;

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
				formErrors.first_name = value.length < 3  ? 'minimum 3 characters required, only letters'
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
				formErrors.password = value.length < 6  ? 'minimum 3 characters required'
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
			console.log('submitted');
			console.log(this.state);
			
			if (formValid(this.state.formErrors)) { 

			const user = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			password: this.state.password,
			email: this.state.email
			};
			
			axios.post(`http://localhost:4000/users`,  user )
			.then(res => {
			console.log(res);
			console.log(res.data);
			}).catch(err => {
				err.status(400).send('unable to save to database');
			});
		}else {console.error('Form invalid!')};
			
			}
			
			
			render () {
			var {formErrors} = this.state;
			return (
			
			<div className="Form">
			<form onSubmit={this.handleSubmit} className="FormInputs">
			<div className="form-group">
			<label htmlFor="first_name" className="FormInputLabel">Firstname</label>
			<input type="text" className="form-control" id="first_name" placeholder="enter your firstname" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
			{formErrors.first_name.length >0 && (
				<span className="errorMessage">{formErrors.first_name}</span>
			)}
			
			</div>

			<div className="form-group">
			<label htmlFor="last_name" className="FormInputLabel">Lastname</label>
			<input type="text" className="form-control" id="last_name" placeholder="enter your lastname" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
			{formErrors.last_name.length >0 && (
				<span className="errorMessage">{formErrors.last_name}</span>
			)}
			
			</div>
			
			<div className="form-group">
			<label htmlFor="password" className="FormInputLabel">Password</label>
			<input type="password" className="form-control" id="password" placeholder="enter your full name" name="password" value={this.state.password} onChange={this.handleChange} />
			{formErrors.password.length >0 && (
				<span className="errorMessage">{formErrors.password}</span>
			)}
			
			</div>
			
			
			<div className="form-group">
			<label htmlFor="email" className="FormInputLabel">Email</label>
			<input type="email" className="form-control" id="email" placeholder="enter your full name" name="email" value={this.state.email} onChange={this.handleChange}/>
			{formErrors.email.length >0 && (
				<span className="errorMessage">{formErrors.email}</span>
			)}
			
			
			</div>
			
			<div>

				<button type="submit" className="FormButton">Register</button>  
			
	
       
				</div>
			</form>
			</div>
			
			)}
			}
			export default Register;