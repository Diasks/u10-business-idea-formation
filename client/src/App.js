
import React, { Component } from 'react';			
			import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
			import PageTwo from './components/pages/PageTwo';
			import Profession from './components/pages/Profession';
			import './App.css';
			
			class App extends Component {
			
			
			
			
			render() {
			return(
				<Router> 
				<div className="formtitle">
				<NavLink to="/PageTwo">Start here</NavLink> 
				<NavLink to="/Profession">Yrken</NavLink> 
				</div>
				<Route exact path="/PageTwo" component={PageTwo}>
        </Route>
		<Route exact path="/Profession" component={Profession}>
        </Route>
				</Router>
			)
			}
			}
		
			export default App;
