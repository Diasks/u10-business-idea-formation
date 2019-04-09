import React, { Component } from 'react';			
			import axios from 'axios';
			
			
			export class Register extends Component {
			constructor() {
			super();
			
			
			this.state = {
			first_name: '',
			last_name: '',
			password: '',
			email: ''
			};
			
			
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			
			
			}
			
			
			handleChange(e) {
			let target = e.target;
			let value = target.value;
			let name = target.name;
			
			
			this.setState({
			[name]: value
			
			});
			
			}
			
			//Kopplad till backenden(!!)
			handleSubmit(e) {
			e.preventDefault();
			console.log('submitted');
			console.log(this.state);
			
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
			
			
			}
			
			
			render () {
			
			return (
			
			<div>
			<form onSubmit={this.handleSubmit}>
			<div>
			<label htmlFor="first_name">Firstname</label>
			<input type="text" id="first_name" placeholder="enter your firstname" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
			
			
			</div>

			<div>
			<label htmlFor="last_name">Lastname</label>
			<input type="text" id="last_name" placeholder="enter your lastname" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
			
			
			</div>
			
			<div>
			<label htmlFor="password">Password</label>
			<input type="password" id="password" placeholder="enter your full name" name="password" value={this.state.password} onChange={this.handleChange} />
			
			
			</div>
			
			
			<div>
			<label htmlFor="email">Email</label>
			<input type="email" id="email" placeholder="enter your full name" name="email" value={this.state.email} onChange={this.handleChange}/>
			
			
			
			</div>
			
			<div><button>Register</button></div>
			</form>
			</div>
			
			)}
			}
			export default Register;