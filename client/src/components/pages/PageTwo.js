import React, {Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import styled from "styled-components/macro";

const FormTitle = styled.div `
    color: #DA70D6;
    font-weight: 300;
    margin-bottom: 50px;
  `;

  const PageTwosAside = styled.div `
  width: 10%;
  background-color: #00BFFF;
  `; 
   
  const PageTwos = styled.div `   
  height: 100vh;
  display: flex;
  color: white;
  `; 
  

  const PageTwoForm = styled.div `
  width: 90%;
  background-color: #D8BFD8;
  padding: 25px 40px;
  overflow: auto;
  `; 
  

  const FormTitleLink = styled(NavLink) `
  color: #DA70D6;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5em;
  margin: 0 10px;
  padding-bottom: 5px;

  &:active {
    color: white;
    border-bottom: 1px solid #DA70D6;

  }
  `; 
  
  
  
 


 class PageTwo extends Component {
    render(){  
return (

<Router>	
<PageTwos> 
           <PageTwosAside></PageTwosAside> 
           <PageTwoForm> 
            <FormTitle> 
        <FormTitleLink to="/Login">Sign In</FormTitleLink> or <FormTitleLink exact to="/Register">Register</FormTitleLink>
        </FormTitle>
        <Route exact path="/Register" component={Register}>
        </Route>
        <Route exact path="/Login" component={Login}> 
        </Route>
      
        </PageTwoForm>	
        </PageTwos>
        </Router>
)

    }
    }

    export default PageTwo;