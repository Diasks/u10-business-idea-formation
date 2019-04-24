import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
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
    console.log("submitted");
    console.log(this.state);

    const user = {
      email: this.state.email,
      password: this.state.password
    };

	axios.post(`http://localhost:4000/api/login`, user)
		.then(res => {
			debugger;
			console.log(res);
			console.log(res.data);
			localStorage.setItem("cool-jwt", res.data.token);
			localStorage.setItem("user", res.data.user._id);
    	});
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit} className="FormInputs">
          <div className="form-group">
            <label htmlFor="email" className="FormInputLabel">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="enter your full name"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="FormInputLabel">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="enter your full name"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button type="submit" className="FormButton">
              Sign in
            </button>{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
