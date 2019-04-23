
import React, { Component } from 'react';			
			import { BrowserRouter as Router, Route } from 'react-router-dom';
			import Header from './components/layout/Header';
			import Profile from './components/pages/Profile';
			import Cvtemplate from './components/pages/Cvtemplate';
			import Login from './components/pages/Login';
			import Register from './components/pages/Register';
			import Footer from './components/layout/Footer'
			import './App.css';
			
			class App extends Component {
			
			
			
			
			render() {
			return (
			<Router>
			<div className="App">
			<div className="container">
			<Header />
			<Route  path="/login" component={Login}/>
			<Route exact path ="/profile" component= {Profile} />
			<Route exact path ="/cvtemplate" component= {Cvtemplate} />
			<Route exact path ="/register" component= {Register} />
			<div id="content">
          
		  </div>
			<Footer />
			</div>
			</div>
			</Router>
					
			);
			}
			}
		
			export default App;
