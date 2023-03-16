import React, {Component} from "react";
import "./App.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0
    }

    this.add = this.add.bind(this);
    this.rm = this.rm.bind(this);
  }

  add(){
    let valor = this.state.numero + 1;
    this.setState({numero:valor})
  }  
  rm(){
    let valor = this.state.numero - 1;
    this.setState({numero: valor});
  }

  render(){
    return(
      <div className="margen">
        <button onClick={this.add}> + </button>
        <span className="label">{this.state.numero}</span>
        <button onClick={this.rm}> - </button>
      </div>
    );
  }
}
export default App;