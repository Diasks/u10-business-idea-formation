import React, { Component } from 'react';
import axios from 'axios';

class Cvtemplate extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            address: '',
            zipcode: '',
            experience: '',
            exdescription: '',
            education: '',
            eddescription: '',
            language: '',
            skills: ''
		};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        let target = event.target;
		let value = target.value;
		let name = target.name;
			
			
		this.setState({
		    [name]: value
		});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        
        const template = {
			firstname: this.state.firstname,
            lastname: this.state.lastname,
            phonenumber: this.state.phonenumber,
            email: this.state.email,
            address: this.state.address,
            zipcode: this.state.zipcode,
            experience: this.state.experience,
            exdescription: this.state.exdescription,
            education: this.state.education,
            eddescription: this.state.eddescription

            
			};
			
		axios.get(`http://localhost:4000/cvtemplate`, template)
		.then(res => {
		console.log(res);
		console.log(res.data);
		})

      }


    render() { 
        return ( 
        <div>
            <h6>Kontaktuppgifter</h6>

            <form onSubmit={this.handleSubmit}>
                
                <div className="form-row">
                <div className="form-group col-md-6">
                        <label>First name: </label>
                            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} className="form-control"/>
                    </div>
                
                    <div className="form-group col-md-6">
                        <label>Last name: </label>
                            <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} className="form-control"/>
                    </div>
                
                </div>

                <div className="form-row">
                <div className="form-group col-md-4">
                    <label>Phone number: </label>
                        <input type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handleChange} className="form-control"/>
                </div>
  
                <div className="form-group col-md-8">
                    <label>Email: </label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label>Address: </label>
                            <input type="text" name="address" value={this.state.address} onChange={this.handleChange} className="form-control"/>
                    </div>

                    <div className="form-group col-md-2">
                    <label>Zip Code: </label>
                            <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} className="form-control"/>
                    </div>
                </div>

                
                
                <div className="form-row">

                    <div className="form-group col-md-6">
                            <h6>Arbetslivserfarenhet</h6>

                            <input type="text" name="experience" value={this.state.experience} onChange={this.handleChange} className="form-control" placeholder="Befattning"/>
                            <textarea type="text" name="exdescription" value={this.state.exdescription} onChange={this.handleChange} className="form-control" placeholder="Beskriv dina arbetsuppgifter"></textarea>
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group col-md-6">
                            <h6>Utbildning</h6>

                            <input type="text" name="education" value={this.state.education} onChange={this.handleChange} className="form-control" placeholder="Befattning"/>
                            <textarea type="text" name="eddescription" value={this.state.eddescription} onChange={this.handleChange} className="form-control" placeholder="Beskriv dina arbetsuppgifter"></textarea>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <h6>Språk</h6>

                        <input type="text" name="language" value={this.state.language} onChange={this.handleChange} className="form-control"/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <h6>Övriga meriter</h6>

                        <input type="text" name="skills" value={this.state.skills} onChange={this.handleChange} className="form-control"/>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Add Changes</button>
            </form>
        </div>
         );
    }
}
 
export default Cvtemplate;