import React,{Component} from 'react';   
import New from './New.js';
import './bg.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      hours : 0,
      min : 0,
      sec : 0
    }
  } 
  render() {
    var d = new Date()
    var hours = this.state.hours
    var min = this.state.min
    var sec = this.state.sec
    setTimeout(() => {
      this.setState({
      hours : d.getHours(),
     min : d.getMinutes(), 
     sec : d.getSeconds()
   })
  },1000) 
    if(hours===23 && min===59 && sec>=50)
      return (
        <div>
          <h1><center><b>{60-sec}</b></center></h1>
        </div>
        )
    else if(hours===23 && min>59)
    {
      return <New/>
    }
    else{
    return (
      <div>
        <h1>
          <b><center>
            { hours + ':' + min + ':' + sec }
          </center>
          </b>
        </h1>
      </div>
    );}
  }
}

export default App;