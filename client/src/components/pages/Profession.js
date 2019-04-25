import React, {Component} from 'react';	
            
class Profession extends Component {
constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
}

routeChange() {
    var path = `PageTwo`;
    this.props.history.push(path);
}
 
render() {
			return (
                <div> 
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">	
			Choose a profession:</h1>
    <button type="submit" className="ProfessionButton" onClick={this.routeChange}>Hantverksyrken</button>  
            <button type="submit" className="ProfessionButton" onClick={this.routeChange}>Serviceyrken</button>  
            <button type="submit" className="ProfessionButton" onClick={this.routeChange}>Socialt arbete</button>  
            <button type="submit" className="ProfessionButton" onClick={this.routeChange}>Tekniskt arbete</button>  
            <button type="submit" className="ProfessionButton" onClick={this.routeChange}>Pedagogiskt arbete</button>  
            <button type="submit" className="ProfessionButton" onClick={this.routeChange}>Vård</button> 

            <button type="submit" className="ProfessionButton" onClick={this.routeChange}>Kultur</button>  
            <button type="submit" className="ProfessionButton" onClick={this.routeChange}>
Naturvetenskapligt arbete</button>  
            <button type="submit" className="ProfessionButton" onClick={this.routeChange}>Sanering och renhållning</button> 
            <button type="submit" className="ProfessionButton" onClick={this.routeChange}>Transport</button> 
  </div>
</div>
            </div>
      )}
            
            }
            
            export default Profession;
            
        