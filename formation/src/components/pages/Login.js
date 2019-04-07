import React, { Component } from 'react';
import axios from 'axios';


export class Login extends Component {
constructor() {
    super();


this.state = {
    email: '',
    password: '',
   
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
        email: this.state.email,    
        password: this.state.password
      };

      axios.get(`http://localhost:4000/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })


}


render () {

return ( 

<div>
    <form onSubmit={this.handleSubmit}>

    <div> 
    <label htmlFor="email">Email</label>
    <input type="email" id="email" placeholder="enter your full name" name="email" value={this.state.email} onChange={this.handleChange}/>
    
    
    
</div>

    <div> 
    <label htmlFor="password">Password</label>
    <input type="password" id="password" placeholder="enter your full name" name="password" value={this.state.password} onChange={this.handleChange} />
    
    
    </div>


  

<div><button>Logga in</button></div>
    </form>
</div>

)}
}









export default Login;