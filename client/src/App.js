
import React, { Component } from 'react';			
			import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
			import PageTwo from './components/pages/PageTwo';
			import './App.css';
			
			class App extends Component {
			
			
			
			
			render() {
			return(
				<Router> 
				<div className="formtitle">
				<NavLink to="/PageTwo">Start here</NavLink> 
				</div>
				<Route exact path="/PageTwo" component={PageTwo}>
        </Route>
				</Router>
			)
			}
			}
		
			export default App;
