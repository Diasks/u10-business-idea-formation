import React, {Component} from 'react';	
import { GetStarted } from "../Welcome";
import  Header  from "../layout/Header";
import  Footer  from "../layout/Footer";

class Profession extends Component {
constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
}

routeChange() {
    const path = `PageTwo`;
    this.props.history.push(path);
}
 
render() {
			return (
                <div> 
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">	
			Choose a profession:</h1>
    <GetStarted onClick={this.routeChange}>Hantverk</GetStarted>  
            <GetStarted onClick={this.routeChange}>Service</GetStarted>  
            <GetStarted onClick={this.routeChange}>Socialt</GetStarted>  
            <GetStarted onClick={this.routeChange}>Teknik</GetStarted>  
            <GetStarted onClick={this.routeChange}>Pedagogik</GetStarted>  
            <GetStarted onClick={this.routeChange}>Vård</GetStarted> 

            <GetStarted onClick={this.routeChange}>Kultur</GetStarted>  
            <GetStarted onClick={this.routeChange}>
Naturvetenskap</GetStarted>  
            <GetStarted onClick={this.routeChange}>Miljö</GetStarted> 
            <GetStarted onClick={this.routeChange}>Transport</GetStarted> 
  </div>
</div>
<Footer/>
            </div>
           
      )}
            
            }
            
            export default Profession;
            
        