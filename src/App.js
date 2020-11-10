import React, {Component} from 'react';
import Menu from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div>
          <Menu /> 
        </div>
      </BrowserRouter>
      
    )
  }
}

export default App;