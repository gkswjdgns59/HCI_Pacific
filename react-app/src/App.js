import './App.css';
import React, { Component } from 'react';
import Header from "./components/header"
import PartiesTab from "./components/PartiesTab"
import PartiesMain from "./components/PartiesMain"
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

class App extends Component{
  render(){
    return (
    <div className="App">
      hello
      <Header></Header>
      <PartiesMain></PartiesMain>
      <PartiesTab></PartiesTab>
    </div>
    );
  }
}

export default App;
