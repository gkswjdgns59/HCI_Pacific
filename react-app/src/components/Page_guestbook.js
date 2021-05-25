import './App.css';
import React, { Component } from 'react';
import Header from "./components/header";
import Board from './components/Board'
import BookGuests from './components/Book_Guests'
import GBbar from './components/GBbar'

class Page_guestbook extends Component{
    render(){
      return (
      <div className="App" style={{marginLeft:240, marginRight:240}}>
        <Header/>
        <Board/>
        <GBbar/>
        <BookGuests/>
      </div>
      );
    }
  }
  
  export default Page_guestbook;