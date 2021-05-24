import './App.css';
import React, { Component } from 'react';
import Header from "./components/header"
import PartiesTab from "./components/PartiesTab"
import PartiesMain from "./components/PartiesMain"
import FormSubmission from "./components/OpenParty"
import Guests from './components/Guests'
import Board from './components/Board'
import BookGuests from './components/Book_Guests'
import GBbar from './components/GBbar'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import GuestInfo from './components/GuestInfo'
import SelectGuestDialog from './components/SelectGuestDialog'
class App extends Component{
  render(){
    return (
    <div className="App" style={{marginLeft:240, marginRight:240}}>
      <Header></Header>
      {/* <PartiesTab/> */}
      <GuestInfo/>
    </div>
    );
  }
}

export default App;
