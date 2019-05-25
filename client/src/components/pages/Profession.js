import React, { Component } from 'react';	
import Header  from "../layout/Header";
import Footer  from "../layout/Footer";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Button = styled.button`
@import url(https://fonts.googleapis.com/css?family=BenchNine:700);

 display: inline-block;
 padding: 20px 60px 20px 60px;
 margin: 20px;
 color: #4eb5f1 !important;
 text-transform: uppercase;
 background: #ffffff;
 padding: 20px;
 border: 4px solid #4eb5f1 !important;
 border-radius: 30px;
 display: inline-block;
 font-family: "BenchNine";
 font-size: 30px;

:hover {
    color: #fff !important;
    border-radius: 50px;
    border-color: #4eb5f1 !important;
    transition: all 0.3s ease 0s;
    background: #4eb5f1;
  }
  
`;

const Professions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 80px 0;
`;

const ProfessionHeader = styled.h1`
@import url(https://fonts.googleapis.com/css?family=BenchNine:700);

display: flex;
justify-content: center;
margin: 40px 10px 40px 10px;
text-align: justify;
font-family: "BenchNine";
line-height: 0.8;
text-transform: uppercase;
letter-spacing: 0px;
color: #86cbf3;
font-size: 4em;

  
`;

const StyledLink = styled(Link)`
 display:inline-block;
 padding:0.3em 1.2em;
 margin:0 0.3em 0.3em 0;
 border-radius:2em;
 border: none;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#FFFFFF;
 background-color:#4eb5f1;
 text-align:center;
 transition: all 0.2s;

:hover {
   background-color:#4095c6;
  }

`;



class Profession extends Component {
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
    this.itRouteChange = this.itRouteChange.bind(this);
    this.builderRouteChange = this.builderRouteChange.bind(this);
    this.mediaRouteChange = this.mediaRouteChange.bind(this);
  }

  routeChange() {
    const path = `GenTemplate`;
    this.props.history.push(path);
    
  }

  itRouteChange() {
    const path = `ItTemplate`;
    this.props.history.push(path);
  }

  builderRouteChange() {
    const path = `BuilderTemplate`;
    this.props.history.push(path);
  }

  mediaRouteChange() {
    const path = `MediaTemplate`;
    this.props.history.push(path);
  }
 
 
  render() {
    
    return (
      <div> 
        <Header/>
        <ProfessionHeader>My CV Templates</ProfessionHeader>

        <Professions>
            <Button onClick={this.routeChange}>Generell</Button>
            <Button onClick={this.itRouteChange}>IT/Teknik</Button>
            <Button onClick={this.builderRouteChange}>Bygg/Hantverk</Button>
            <Button onClick={this.mediaRouteChange}>Media/Kultur</Button>  
        </Professions>

        <StyledLink to="/profile">Back to profile</StyledLink>

        <Footer/>
      </div>
            
    )
  }
}
            
export default Profession;
            
        