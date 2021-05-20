import './App.css';
import React, { Component } from 'react';
import Header from "./components/header"
import PartiesTab from "./components/PartiesTab"
import PartiesMain from "./components/PartiesMain"
import Guests from './components/Guests'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

class App extends Component{
  render(){
    return (
    <div className="App" style={{marginLeft:240, marginRight:240}}>
      <Header></Header>
      <PartiesMain></PartiesMain>
      <PartiesTab/>
      <Guests></Guests>
    </div>
    );
  }
}

export default App;
