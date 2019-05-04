import React, {Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

 class PageTwo extends Component {
    render(){  
return (

<Router>
		
			<div className="PageTwo"> 
            <div className="PageTwo__Aside"></div>
            <div className="PageTwo__Form"> 
				
        <div className="FormTitle">
        <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Register</NavLink>
        </div>
        
        
        
        
        <Route exact path="/register" component={Register}>
        </Route>
        <Route path="/login" component={Login}> 
        </Route>
        </div>	
        </div>
        
        </Router>
)

    }
    }

    export default PageTwo;