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
  



 class PageTwo extends Component {
    render(){  
return (

<Router>	
<PageTwos> 
           <PageTwosAside></PageTwosAside> 
           <PageTwoForm> 
            <FormTitle> 
        <NavLink to="/Login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/Register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Register</NavLink>
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