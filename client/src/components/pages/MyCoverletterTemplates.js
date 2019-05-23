import React, { Component } from 'react';
import  Header  from "../layout/Header";
import  Footer  from "../layout/Footer";
import styled from "styled-components/macro";


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

const Back = styled.button`
 padding: 0.3em 1.2em;
 margin: 0 0.3em 0.3em 0;
 border-radius: 2em;
 border: none;
 text-decoration: none;
 font-family: 'Roboto',sans-serif;
 font-weight: 300;
 color: #FFFFFF;
 background-color: #4eb5f1;
 text-align: center;
 transition: all 0.2s;

:hover {
   background-color: #4095c6;
  }

`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 70px 0;
`;


class MyCoverletterTemplates extends Component {
constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
}


routeChange() {
    const path = `MyTemplates`;
    this.props.history.push(path);
}
 
render() {
    function goBack() {
        window.history.back();
    }

	return (
        <div> 
            <Header/>
            <ProfessionHeader>My Coverletters</ProfessionHeader>

            <Professions>
                <Button onClick={this.routeChange}>Spotify</Button>
                <Button onClick={this.routeChange}>Google</Button>
                <Button onClick={this.routeChange}>Facebook</Button>
            </Professions>

            <Buttons>
                <Back onClick={e => goBack()}>Tillbaka</Back>
            </Buttons>

            <Footer/>
        </div>
           
    )}
}

export default MyCoverletterTemplates;