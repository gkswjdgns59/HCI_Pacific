import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import PageHome from './components/PageHome'
import PageParties from './components/PageParties'
import PageOpen from './components/PageOpen'
import PageParty from './components/PageParty'
import PageGuestInfo from './components/PageGuestInfo'
import PageGuestbook from './components/PageGuestbook';
import PageMypage from './components/PageMypage'
import Auth from './components/Auth';

class App extends Component{
  componentDidMount(){
    const id = sessionStorage.getItem('id');
    if (id){
      Auth.auth = id;
    }
  }
  
  render(){
    return (
    <div className="App">
      <div className="container">
          <div className="row">
              <div className="col-xs-1 col-md-2"></div>
              <div className="col-xs-10 col-md-8"></div>
                <BrowserRouter>
                  <Route exact path="/" component={PageHome}/>
                  <Route exact path="/parties" component={PageParties}/>
                  <Route exact path="/open" component={PageOpen}/>
                  <Route exact path="/parties/:partyname" component={PageParty}/>
                  <Route exact path="/guests/:guestname" component={PageGuestInfo}/>
                  <Route exact path="/guestbook" component={PageGuestbook}/>
                  <Route exact path="/mypage" component={PageMypage}/>
                </BrowserRouter> 
              <div className="col-xs-1 col-md-2"></div>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
