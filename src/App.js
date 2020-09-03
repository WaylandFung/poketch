import React, {Component} from 'react';
import './App.css'
import { App0_clock } from './App0_clock';
import { App1_calculator } from './App1_calculator';
import { Watch_frame } from './Watch_frame';



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      idApp: 1,
      maxApps: 3,
    };
  }

  changeApp = (num) =>{
    this.setState({
      idApp: (((this.state.idApp + num) % this.state.maxApps)+this.state.maxApps)%this.state.maxApps,
    })
    
  }

  appDisplay(id){
    switch(id){
      case 0:
        return(
          <App0_clock/>
        )
      
      case 1:
        return(
          
          <App1_calculator/>
        )
      
      default:
        return null
    }
  }

  
 // <rect className= "default" style={{background: 'blue'}}/>
  render(){
    
    return (

      <div className = "App" >
        <div className = "App">
          
        
          <Watch_frame data={{changeApp: this.changeApp}}/>
          {this.appDisplay(this.state.idApp)}
        </div>
        
        
        
        
        
        

      </div>
    );
  }
}
/**/

export default App;
