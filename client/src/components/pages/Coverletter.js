import React, {Component} from 'react';	
import { GetStarted } from "../Welcome";
import  Header  from "../layout/Header";
import  Footer  from "../layout/Footer";

class Coverletter extends Component {
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
            <Header/>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    
                </div>
            </div>
            <Footer/>
        </div>      
    )}
            
}
            
export default Coverletter;
            
        