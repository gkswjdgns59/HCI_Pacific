import './App.css';
import React, { Component } from 'react';
import Header from "./components/header"
import PartiesTab from "./components/PartiesTab"

class App extends Component{
  render(){
    return (
    <div className="App">
      hello
      <Header></Header>
      <PartiesTab></PartiesTab>
    </div>
    );
  }
}

export default App;
