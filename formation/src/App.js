import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Register from './components/pages/Register'; 
import './App.css';

class App extends Component {
 



  render() {
    return (
      <Router> 
      <div className="App">
      <div className="container"> 
<Header />
<Route  path="/login" component={Login}/>
<Route exact path ="/about" component= {Profile} />
<Route exact path ="/register" component= {Register} />
      </div>
      </div>
      </Router>
    
    );
  }
}

export default App;
