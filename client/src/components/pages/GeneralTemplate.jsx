import React, { Component } from 'react';
import axios from 'axios';

import Header from '../layout/Header';

import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { colors } from "../Common";

const Content = styled.div`
  display: flex;
  flex: 1 10;
  min-height: 900px;
`;

const Sidebar = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex: 0 0 25%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 2000;
  color: ${colors.Gray};
`;

const Body = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 640px;
  min-height: 640px;
  margin: 30px auto;
  height: 100%;
  width: 100%;
`;

const StyledHr = styled.hr`
  border: 1px white ${colors.LightGray};
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: #a9a9a9;
  text-decoration: none;
  padding: 10px;
  font-weight: 500;
  font-size: 22px;

  &:hover {
    color: ${colors.DarkCerulean};
    text-decoration: none;
  }
`;

class GeneralTemplate extends Component {
    
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
        
    }

    componentDidMount() {

        const user = {
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

        }

    axios.get(`http://localhost:4000/users`, user)
        .then(res => console.log(res.data));
    }



    render() { 
        return ( 
        <div>
            <Header />
            <Content>
                <Sidebar>
                    <StyledLink to="/profession">Templates</StyledLink>
                    <StyledLink to="/color-schemes">Color schemes</StyledLink>
                    <StyledLink to="/popular">Popular designs</StyledLink>
                    <StyledHr />
                    <StyledLink to="/new">+ New</StyledLink>
                </Sidebar>

                <Body>
                <h6>Kontaktuppgifter</h6>
                
                
                </Body>
            </Content>

        </div>
         );
    }
}
 
export default GeneralTemplate;